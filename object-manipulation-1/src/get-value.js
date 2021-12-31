/* exported getValue */
let values;
const getValue = (object, key) => {
  for(let keys in object){
    values = object[key];
    if(values === key){
      return values;
    }
  }
  return values;
}
