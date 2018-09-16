module.exports = function check(str, bracketsConfig) {
  // your solution
  let leftConfig = [], rightConfig = [], stack = [];

  bracketsConfig.forEach(element => {
    leftConfig.push(element[0]);
    rightConfig.push(element[1]);
  });
    
  for (let i of str) {
    if (leftConfig.includes(i)) {
      stack.push(i);
      //console.log('position: ',stack.indexOf(i),',stack: ', stack);
    }
    if (rightConfig.includes(i) && stack.pop() !== leftConfig[rightConfig.indexOf(i)]) {
        return false;
      }
    }
  return stack.length === 0;
}