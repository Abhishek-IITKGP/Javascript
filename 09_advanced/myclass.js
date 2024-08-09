class user{
    constructor(username, email, password){ //constructor is called everytime 'new' keyword is used to make a new instance.
        this.username = username;           //constructor is only used to keep variables that it get from the instance.
        this.email = email;
        this.password = password;
    }

    encryptPassword(){     //class method, here this keyword reffers to the class itself.
        return `${this.password}`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new user('abhishek','abhishek@gmail.com',12344556);

console.log(newUser.changeUserName());
console.log(newUser.encryptPassword());

//behind the scene: behind the scene the class and instance uses the prototype object only.

function userOne(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

userOne.prototype.getEmail = function(){
    return `${this.email}`
}

userOne.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}

const newUser1 = new userOne('abhishek','abhishek@gmail.com',122333444455555);

console.log(newUser1.changeName());





