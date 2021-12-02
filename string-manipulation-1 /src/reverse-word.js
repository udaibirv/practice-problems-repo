/* exported reverseWord */
const reverseWord = (word) => {
  let reverseWord = '';
  for(let i = word.length - 1; i >= 0; i--){
    let current = word[i];
    reverseWord += current;
  }

  return reverseWord;
}
