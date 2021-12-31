/* exported setValue */
const setValue = (object, key, value) => {
  if(object){
    return object[key] = value;
  }else{
    return undefined;
  }
}
