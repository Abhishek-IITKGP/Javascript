//parent class
class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`this is username: ${this.username}`);
        
    }

    static createId(){  //static keyword freezes the method and not allow any created instance to have access of it also not allow any child class to have access of it.
        return `123`;
    }
}

//inherited class.
class teacher extends user{
    constructor(username, email, password){
        super(username);  //'super' keyword it puts the username in its parent class also.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course is added by ${this.username}`);
        
    }
}

const x = new teacher('abhishek','abhishek@gmail.com',1234567); //instance of class teacher.
console.log(x.addCourse());
console.log(x.logMe());
console.log(x.createId()); //throw error as createId is a static method.


