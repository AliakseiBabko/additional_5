module.exports = function check(str, bracketsConfig) {
  // your solution
let configSize = bracketsConfig.length;
let strSize = str.length;
let leftConfig = [], rightConfig = [], stack = [];
let ch, expected;
for (let i = 0; i< configSize/2; i++) {
  leftConfig [i] = bracketsConfig [i][0];
  rightConfig [i] = bracketsConfig [i][1];
}
if (str.length % 2) {
  return false;
}
if (leftConfig.indexOf(str[0]) == rightConfig.indexOf(str[2])) {
  return false;
}
for (let i=0; i < strSize; i++) {
  ch = str[i];
  if (leftConfig.includes(ch) > -1) {
    stack.push();
  }
  else if (rightConfig.includes(ch) > -1) {
    expected = leftConfig[rightConfig.indexOf(ch)];
    if (stack.length === 0 || stack.pop() != expected) {
      return false;
    }
    else {
      continue;
    }
  }
}
return (stack.length === 0);
}