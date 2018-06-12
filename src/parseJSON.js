// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

//input: taking in JSON string 
//output: array or object 


var parseJSON = function(json) {
  // your code goes here

  if(json.includes('[]')){
    return []; 
  }

  //check if json has a curly brace 
  if(json.includes('{')){
    //if so, define variable  
    //split into an array and pop and shift the first and last elements storing in variable 
    var array = json.split('').slice(1, json.split('').length);
    var obj = {}; 
    for(var i = 0; i < array.length; i++){
      if(array[i])
    }
  }
    //add the key using join starting and stopping at the quotes 
    //add the value as the last element from the array 
    //return object 

    //

//   if(typeof json === 'number' || typeof json === 'boolean' ){
//     return json; 
//   }

//   if(json.includes('[')){
//     var returnArray = []; 
    
//           for(var i = 0; i < destrung.length; i++){
//             parseJSON(destrung[i]); 
//           }
    
// }


//   if(typeof destrung === 'object'){
//     for(var key in json){
//       if(typeof json[key] === 'object'){
//         parseJSON(json[key]); 
//       }
//     }
//   }

//   return "'"+destrung+"'"; 

}