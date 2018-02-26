module.exports = function check(str, bracketsConfig) {
  // your solution
  let stringSize = str.length;
  if ((stringSize % 2) != 0) {
    return false;
  };
  /*let i, j, k;
  let leftConfig = [], rightConfig = [];
  let counter = 0;
  for (i in bracketsConfig) {

  }
  //let leftConfig = ['(','[','|','{','1','3','5','7','8'];
  //let rightConfig = [')',']','|','}','2','4','6','7','8'];
  let sample = new Array(stringSize)
  let buf1 = [];
  let buf2 = [];
  i = 0;
  while (i < stringSize) {
    sample[i] = str.charAt(i);
    i++;
  };
  for (i = 0; i < stringSize; i++) {
    while (leftConfig.includes(sample[i])) {
      for (j = 0; j < 9; j++) {
        if (sample[i] = leftConfig[j]) {
          buf1.push(j);
          counter++;
        }
      }
    };
    buf.reverse();
    for (k = 0; k < counter; k++) {
      for (j = 0; j < 9; j++) {
        if (sample[i+k] = leftConfig[j]) {
          buf2.push(j);
        }
      }
    };
    for (i = 0; i < counter; i++) {
      if (buf1[i] != buf2[i]) {
        return false;
      }
    };
    i += counter;
  };*/
  return true;
}
