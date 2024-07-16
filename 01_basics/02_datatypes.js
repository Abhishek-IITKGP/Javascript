"use strict"  //treat all JS code as newer version

//alert(3 + 3); we are using nodeJS not browser

console.log(3+3); console.log('abhishek'); //always prefer to start from next line to improve code readability

let name = 'abhishek'; //string
let age = 18; //number
let isLoggedIn = true; //boolean


//THESE ARE PREMITIVE DATATYPES
// number => range(2 to 2^52)
// bigint => when the number is too large
// boolean => true or false
// string => ''
// null => its a stand alone value, its a representation of empty value
// undefined => when the value is not assigned
// symbol => uniqueness 


console.log(typeof(name)) //typeof to get the data type of the variable.

console.log(typeof null); //type of null is object.

console.log(typeof undefined); //type fo undefined is undefined.

//Primitve datatypes: They all are callby values. That means when the data is allocated they are used by copying from the reference and not the whole refernce is used

//total  7 categories: String, Number, Boolean, Null, Undefined, Symbol, BigInt

let id = Symbol('123');
let myId = Symbol('123');

console.log(id == myId);

console.log(typeof id);

//Reference type datatype or Non-primitive: The reference of data can be allocated.
//Arrays, Objects and Functions

//JS is a dynamic typping language. No need to define the datatype of the variable.

//Array
const heros = ['shaktimaan', 'naagraj', 'doga'];

//Object
let myObject = {
    name: 'abhishek',
    age: '23'
}

//Function
const myFunction = function(){  //we can have our function in a varible also
    console.log('Hello world!');
}

console.log(typeof myFunction); //return type will be function (Object function).
console.log(typeof heros); //here also the return type is object.

