/* exported isLowerCased */

const isLowerCased = (word) => {
  let lower = word.toLowerCase();
  if(word === lower){
    return true;
  }else{
    return false;
  }
}
