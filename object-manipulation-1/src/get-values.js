/* exported getValues */
const getValues = (object) => {
  let newArray = [];
  for(let keys in object){
    newArray.push(object[keys])
  }
  return newArray
}
