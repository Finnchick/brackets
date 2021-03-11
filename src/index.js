  module.exports = function check(str, bracketsConfig) {
    let openBrackets = [];
    let closeBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
      openBrackets[i] = bracketsConfig[i][0];
      closeBrackets[i] = bracketsConfig[i][1];
    }
    let inputString = str.split('');
  for (let i = 0; i < inputString.length; i++) {
    for (let index in openBrackets){
    if (inputString[i] == openBrackets[index] && inputString[i + 1] == closeBrackets[index]) {
      inputString.splice(i, 2);
      i = -1;
      break;
      }
    }
  }
  if (inputString.length == 0) return true;
  else return false;
  }
