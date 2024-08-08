//when the 'this' keyword reffers to the gobal execution context it reffers to the window object
//but in node.js it does not have the access of window unlike browser, that is why it return an empty object {}

function setUserName(userName){
    console.log('userName called'); //to check if it is called by the createUser function of not
    this.userName = userName;
}

function createUser(username, email, password){
    setUserName.call(this,username); //so it is not calling setUserName function
    this.email = email;
    this.password = password;
}

const user = new createUser('abhishek','abhishek@gmail.com', 1234567);
console.log(user);

function employeeProfile(username, gender, salary, department){
    setUserName.call(this,username);
    this.gender = gender;
    this.salary = salary;
    this.department = department;
}

const employee = new employeeProfile('abhishek','M',80000,'schnyders');
console.log(employee.gender);

