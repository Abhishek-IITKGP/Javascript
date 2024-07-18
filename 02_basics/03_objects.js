//***************************************SINGLETON*************************************************//
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

//inside the object all the **KEYS** are stored as **STRING** (even if they are numbers, JS automatically convert them into string while storing).
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

//***************************OBJECT BASIC OPERATIONS*************************//

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

//*******************************OBJECT WITH THE HELP OF CONTRUCTOR***********************************//

const constObj = new Object(); //basic syntax    
console.log(constObj); //empty object            
constObj.id = 1234;
constObj.name = 'sammy';
constObj.isLoggedIn = false;

console.log(constObj); //now the object has the elements written above.

//nested object
const regularUser = {    
    email:'sammy@email.com',
    fullName: {
        userFullName:{
            firstName: 'abhishek',
            lastName: 'kumar'
        }
    }
};
console.log(regularUser.fullName);          //accessing the object in objects
console.log(regularUser.fullName.userFullName.firstName);

//Combining the objects
//*********************/
const obj2 = {1:'a',2:'b',3:'c'};
const obj3 = {4:'d',5:'e',6:'f'};

//const obj4 = {obj2,obj3};
const obj4 = Object.assign({},obj2, obj3); //{} is not cumpolsury.
console.log(obj4);

const spreadObj = {...obj2,...obj3};
console.log(spreadObj);

//*************************************ARRAY OF OBJECTS*********************************//

const users = [
    {
        id:2334,
        email:'2334@email.com'
    },

    {
        id:3340,
        email:'3340@email.com'
    },

    {
        id:5005,
        email:'5005@email.com'
    }
]

console.log(users[0].email); //accessing the object elements within the array.

const key = Object.keys(constObj);
const value = Object.values(constObj); //return types of key and value is array.

console.log(`keys of constObj are ${key} and values are ${value}`); //here the key and value which are originally an array are converted to the string automatically by JS internally it uses toString method.
console.log(Object.entries(constObj));

console.log(constObj.hasOwnProperty('isLoggedIn')); //to check if the object has the specified key return type boolean.

