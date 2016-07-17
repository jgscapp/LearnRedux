var redux = require('redux');

console.log('Starting redux example');

//Pure function  does not update any variables
//Does not rely on variable defines outside the function
//can't have asyncronus req  no promises or call back
function add (a, b) {
  return a + b;
}

//This is not a pure function, because is using
//a variable defined outside of the function
var a = 3;
function add (b) {
  return a + b;
}

//this is not a pure function because update values
//defined outside of function
var result;
function add (a, b) {
  result = a + b;
  return result;
}

//no pure function becausae it won't give the same
//result everytime it is executed
function add (a, b) {
  return a + b + new Date().getSeconds();
}

 function changeProp(obj) {
   return {
     ...obj,
     name: 'Jen'
   };
   //pure function can not update obj
   //obj.name = 'Jen';
   //return obj;
 }
//
 var res = changeProp({
   name: 'Andrew',
   age: 25
 });
 console.log(res);
