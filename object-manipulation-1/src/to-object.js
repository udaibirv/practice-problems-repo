/* exported toObject */
const toObject = (keyValuePair) => {
  let newObject = {};
  for(let i = 0; i <= keyValuePair.length; i++){
    newObject[keyValuePair[0]] = keyValuePair[1];
  }
  return newObject;
}
