//************************************prototype************************************* */
// All the functions, arrays and strings have their own prototype as well as they have the access of Object prototype and there is no any other super prototype of Object
// So basically it follows a hirarchy in terms of finding prototype methods.

//Its a special property used with constructor functions and classes in JS and not used with objects created with object literals ({}).

const multiplyFive =  function(num){
    return num*5;
}

console.log(multiplyFive(5));
console.log(typeof multiplyFive);

console.log(multiplyFive.prototype); //here it gives an empty object as prototype is available in browser only.

multiplyFive.power = 100; //so here the function(multiplyFive) is acting as object because in JS everything is an object
console.log(multiplyFive.power);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

//CREATE YOUR OWN PROTOYPE METHOD
//injecting property in the prototype of a function
createUser.prototype.increment = function(){  //we can inject our own methods in the prototype of any created object also.
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(this.username);
}

const intro = new createUser('abhishek',100);
intro.printMe(); //it will return the result of printMe method that we injected in the protoype of created function.

// use increment method
intro.increment(); //this increment the score.
console.log(intro.score);

//********************************************METHOD CREATION*****************************************/
let myName = ' abhishek    ';

console.log(myName.trueLength);

let myHeros = ['thor','spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sting',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

//Object protoype
Object.prototype.myName = function(){  //creating an object method.
    console.log('This is will present in protoype of every object');
}

const myObj = {
    name: 'abhi',
    age: 23
}

myObj.myName(); //this method is a object method so evry object have the access of myName method.

//now inject method in a created object and check if it can be accssed by the grobal object.
myObj.myAddress = function(){
    console.log('This will be present in myObj object only');
}

myObj.myAddress();  //this will not throw any error
//Object.myAddress(); //this will throw an error.
//so prototype of global object is accessible to all the objects but the opposite is not true.


//***********************************************INHERITANCE****************************************//
const userOne = {
    name: 'abhishek',
    company: 'XYZ'
}

const accountInfo = {
    accNo: 100000001,
    bank: 'My Bank'
}

const residence = {
    address: 'Hydrabad',
    type: 'Urban'
}

const userInfo = {
    __proto__ : userOne, //making a new object and inheritig other objects using __proto__ method.
    accountInfo,
    residence
}
console.log(userInfo.userOne);





