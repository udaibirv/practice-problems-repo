/* exported isVowel */

let isVowel = (character) => {
  let vowels = 'aeiouAEIOU';
  for(let i = 0; i <= vowels.length; i++){
    if(character === vowels[i]){
      return true;
    }
  }
  return false;
}
