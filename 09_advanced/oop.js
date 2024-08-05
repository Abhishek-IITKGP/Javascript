//object literals
const users = {
    username : 'abhishek',
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}

console.log(users.username);
console.log(users.getUserDetails());
console.log(this); // here we get empty object because there is nothing in global context here in the node js
//this keyword referes to its immediate context.
//in browser we get global context which is window object so we get window and its prototype when we do console log in browser.

//constructor function => new keyword: it allows us to make a new instance or context from an object literal.

function user(username,loginCount,isLoggedIn){
    this.username = username;
    //this.username is variable and username is value in the above code line
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Good morning! from ${this.username}`);
        
    }

    return this //ths is not requred because by default return this is always present in the function.
}

const userOne = user('abhishek',1,true);
console.log(userOne);
const userTwo = user('kumar',2,false); //now this overwrites the values in the user function function and don't add a new function, that is why we need construnctor that give a new contxt of the user function to put values in it.
console.log(userOne); //here we are printing userOne but this time it is overwritten by userTwo because we are not using contructor function.

//**********************BY USING CONTRUNCTOR KEYWORD (that allow multiple instances of an object literals)*******************************//
const userThree = new user('abhi',4,true);
console.log(userThree);
const userFour = new user('AK',5,false);
console.log(userFour);
//here both userThree and userFour are differnet and overwrting each other as we are using construnctor keyword.

//constructor : constructor property is the reference to itself.
console.log(userFour.constructor);
//instanceOf














