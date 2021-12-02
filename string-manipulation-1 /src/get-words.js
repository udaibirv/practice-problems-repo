/* exported getWords */

const getWords = (string) => {
  let empty = [];
  let newWord = [];
  let newString;
  if(string === ''){
    return empty;
  }else{
    newString = string.split(' ');
    newWord.push(newString);
  }
  return newString;
}
