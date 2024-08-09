//using getter and setter method we can change the way we store the information in the class, object or function from the their respective instance
//usage: using these getter and setters methods like .length in array works. it stores the array and when the get method called it does the background calculation and returns the length of the array.
//*******************************************************Using class (most common)**************************************************************************//
class user{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

   get email(){
    return this._email; //we have to add '_' beacuse this will remove the stack overflow error
   }

   set email(value){
    this._email = value; //no return in setter method and we have to pass the argument also, the value that we want to set, it is automatically given by the instance of the class.
   }
   
    get password(){
    return `password: ${this._password}`; //here we are modifying the password while returning.
   }

   set password(value){
    this._password = `this is setter password: ${value}`;  //here we are modifyint the error while setting it into the class.
   }
}

const newUser = new user('abhishek@gmail.com',1234456);
console.log(newUser.password);
console.log(newUser.email);

//*******************************************Using function************************************************************//
function userOne(email, password){
    this.password = password,
    this.email = email

    Object.defineProperty(this, 'email',{
        get: function(){
            return `changed email using function getter: ${this._email}`
        },
        set: function(value){
            this._email = value
        }
    })
}

const newUserOne = new userOne('abhi',2300);
console.log(newUserOne.email);

//******************************************************************************************************************** */
//similarly we can make getter and setter in objects also but it is very rare.

const userTwo = {
    _email: 'abc@abc.com',
    _password: 123,

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    }
}

console.log(userTwo.email); //here we do not need to add '_' before the name of the variable.
console.log(userTwo._email);


