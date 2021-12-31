/* exported getKeys */
const getKeys = (object) => {
  let newArray = [];
  for(let key in object){
    newArray.push(key);
  }
  return newArray;
}
