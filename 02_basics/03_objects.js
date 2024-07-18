//singleton
//object literals
//create objects
const JsUser = {
    name: 'abhishek',
    age: 23,
    location: 'hydrabad',
    email: 'abhishek@email.com',
    isLoggedIn: false,
    lastLoginDays: ['monday', 'friday', 'saturday'],
}

//inside the object all the KEYS are stored as STRING (even if they are numbers, JS automatically convert them into string while storing).
//values can be of any datatype:
let person = {
    name: 'John',   // String value
    age: 30,        // Number value
    isActive: true, // Boolean value
    job: null       // Null value
  };  

console.log( typeof JsUser.email); //inside the objects the keys are stored as string.
console.log(JsUser['email']);
console.log(JsUser.lastLoginDays);

const test = Symbol('yes');

const obj ={
    test: 'yes'
};

console.log(typeof obj.test);

const obj1 ={
    [test]: 'yes'
};

console.log(typeof obj1[test]);

//***************************OBJECTS BASIC OPERATIONS*************************//

//hoe to change the values in an object
JsUser.email='abhi@email.com';
console.log(JsUser.email); //we accsess elements from the object by dot nottation.

//lock the values of an object: No changes in the object data is allowed
//Object.freeze(JsUser);
JsUser.name = 'abhi'; //name will not be changed as the object is freezed.
console.log(JsUser.name);

//Add function in an object
JsUser.greeting = function(){
    console.log('good morning!');
};

console.log(JsUser.greeting()); //() is important for execution of the function. without this the result will be the function itself without execution.

JsUser.greeting2 = function(){
    console.log(`good morning ${this.name}`); //'this' is used to refer the object itself.
};

console.log(JsUser.greeting2());