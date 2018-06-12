// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if(typeof obj === "number"){
    return ""+obj;
  }
  // if (obj === undefined || typeof obj === 'function'){
  //   return ''
  // }
  if(obj === null){
    return "null";
  }
  if(typeof obj === "boolean"){
    return ""+obj;
  }
  if (typeof obj === "string"){
    return '"'+obj+'"';
  }
  if (Array.isArray(obj)){
    if(obj.length<1){
      return '[]';
    }
    var string = '';
    for(var i=0;i<obj.length;i++){
      string += stringifyJSON(obj[i]) +',';
    }
    return '['+string.slice(0,string.length-1)+']';
  }
  if (typeof obj === 'object'){
    var objString = '';
  
    for (var key in obj){
      if(obj[key] === undefined || typeof obj[key] === 'function'){
        return '{}'
      }else{
      objString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{'+objString.slice(0,objString.length-1)+'}';
  }
};