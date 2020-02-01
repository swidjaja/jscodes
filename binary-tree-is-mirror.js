const isMirror = (root1, root2) => {
  if (root1 === null && root2 === null) return true;
  if ((root1 !== null && root2 === null) || (root1 === null && root2 !== null)) return false;
  const valIsSame = root1.val === root2.val;
  const left1IsMirrorOfRight2 = isMirror(root1.left, root2.right);
  const left2IsMirrorOfRight1 = isMirror(root1.right, root2.left);
  return valIsSame && left1IsMirrorOfRight2 && left2IsMirrorOfRight1;
};

module.exports = isMirror;
