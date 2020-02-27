// Utils
const isOper = (token) => /[\+\-\*\/=]/.test(token);
const isOperand = (token) => /\d/.test(token);
const calculate = (oper, operand1, operand2) => {
  if (oper === '+') return operand1 + operand2;
  if (oper === '-') return operand1 - operand2;
  if (oper === '*') return operand1 * operand2;
  if (oper === '/') {
    if (operand2 === 0) {
      throw new Error('Cannot divide by 0');
    }
    return operand1 / operand2;
  }
  throw new Error(`${oper} is not a valid operator`);
};
const precendences = {
  '+' : 1,
  '-' : 1,
  '*' : 2,
  '/' : 2,
};
const hasHigherPrecedence = (oper1, oper2) =>
  precendences[oper1] > precendences[oper2];

// Main function
const process = (str) => {
  const opers = [];
  const operands = [];
  let result;
  let currentToken;

  const tokens = str.split('');

  for (let i = 0; i < tokens.length; i++) {
    if (isOperand(tokens[i])) {
      if (!isOperand(currentToken)) {
        operands.push(parseInt(tokens[i], 10));
        currentToken = tokens[i];
      } else {
        const operandInStack = operands.pop();
        const newOperand = parseInt(`${operandInStack}${tokens[i]}`, 10);
        operands.push(newOperand);
        currentToken = newOperand;
      }
    } else if (isOper(tokens[i])) {
      currentToken = tokens[i];
      if (tokens[i] === '=') {
        if (!opers.length) {
          throw new Error('Parsing error! No operator is available!');
        } else {
          let poppedOper = opers.pop();
          while (poppedOper) {
            const operand1 = operands.pop();
            const operand2 = operands.pop();
            if (typeof operand1 !== 'undefined' && typeof operand2 !== 'undefined') {
              operands.push(calculate(poppedOper, operand2, operand1));
            } else {
              throw new Error('Parsing error! There is not enough operands!');
            }
            poppedOper = opers.pop();
          }
          if (operands.length === 1) {
            result = operands.pop();
          } else {
            throw new Error('Parsing error! No final result found!');
          }
        }
      }
      else if (!opers.length) {
        opers.push(tokens[i]);
      } else {
        const topOper = opers[opers.length - 1];
        if (hasHigherPrecedence(tokens[i], topOper)) {
          opers.push(tokens[i]);
        } else {
          const oper = opers.pop();
          const operand1 = operands.pop();
          const operand2 = operands.pop();
          if (typeof oper !== 'undefined' && typeof operand1 !== 'undefined' && typeof operand2 !== 'undefined') {
            operands.push(calculate(oper, operand2, operand1));
            opers.push(tokens[i]);
          } else {
            throw new Error('parsing Error! Missing either operator or the operands');
          }
        }
      }
    } else {
      throw new Error(`parsing Error! ${tokens[i]} is not a valid operator or operand!`);
    }
  }
  return result;
}

// Tests
[
  '1+2+3+4+5=',
  '1+24*5-1=',
  '1*24+5-1=',
  '1+2+5*4--=',
  '1/0=',
  'a+b=',
  '1/2+1=',
  '1+2/3+1=',
].forEach((test) => {
  console.log(`TEST: ${test}`);
  try {
    console.log(`RESULT: ${process(test)}`);
  } catch (ex) {
    console.log(ex.message);
  }
});
