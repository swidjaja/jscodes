// Given 2 binary strings, return the result of the addition in string format
function add(str1, str2)
{ 
   var a = str1.split('');
   var b = str2.split('');
   var temp = [];
   var delta = a.length - b.length;
   var max = Math.max(a.length, b.length);
   var carrier = 0;
   
   for (var idx = max - 1; idx >= 0; --idx){
      if (delta > 0) {
         var idxb = idx - delta;
         if (idxb < 0) {
            temp[idx] = parseInt(a[idx], 10)
         } else {
            temp[idx] = parseInt(a[idx], 10) + parseInt(b[idxb])
         }
      } else {
         var idxa = idx + delta;
         if (idxa >= 0) {
            temp[idx] = parseInt(a[idxa]) + parseInt(b[idx]);
         } else {
            temp[idx] = parseInt(b[idx]);
         }
         
      }
      temp[idx] += carrier;

      if (temp[idx] <= 1) {
         temp[idx] = temp[idx];
      } else {
         carrier = 1;
         temp[idx] = temp[idx] % 2;
      }
   }

   if (carrier === 1) {
      temp.unshift(1);
   }
   return temp.join('');
}




function map(input, callback) {
	var result = [];
	if (typeof callback === 'function') {
		for (var idx = 0, max = input.length; idx < max; ++idx) {
			result.push(callback.call(null, input[idx]));
		}
	}
	return result;
}

function each(input, callback) {
	if (typeof callback === 'function') {
		for (var idx = 0, max = input.length; idx < max; ++idx) {
			callback.call(null, input[idx]);
		}
	}
	return input;
}

function find(input, tester, getAll) {
	var found;
	if (getAll) {
		found = [];
	}
	if (typeof tester === 'function') {
		for (var idx = 0, max = input.length; idx < max; ++idx) {
			if (tester.call(null, input[idx])) {
				if (getAll) {
					found.push(input[idx]);
				} else {
					found = input[idx];
					break;
				}
			}
		}
	}
	return found;
}

function insertionSort(arr) {
	var swap = function(arr, idx, idy) {
		var temp = arr[idx];
		arr[idx] = arr[idy];
		arr[idy] = temp;
	};
	for (var idx = 1, len = arr.length; idx < len; ++idx) {
		for (var idy = idx; idy > 0 && arr[idy] < arr[idy - 1]; --idy) {
			swap(arr, idy, idy - 1);
		}
	}
	return arr;
}