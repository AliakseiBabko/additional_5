module.exports = function check(str, bracketsConfig) {
  // your solution
  let stringSize = str.length;
  if (stringSize % 2) {
    return false;
  };
  let i;
  let configSize = Object.keys(bracketsConfig).length;
  let leftConfig = new Array(5), rightConfig = new Array(5);
  for (i = 0; i < configSize/2; i++) {
    leftConfig[i] = bracketsConfig[i][0];
    rightConfig[i] = bracketsConfig[i][1];
  };
  let counter = 0;
  i = 0;
  let sample = new Array(stringSize)
  let buf = [];
  while (i <= stringSize) {
    sample[i] = str.charAt(i);
    i++;
  }
  for (i = 0; i < stringSize; i++) {
    while (leftConfig.includes(sample[i])) {
      buf.push(sample[i]);
    }
  }
  return true;
}
