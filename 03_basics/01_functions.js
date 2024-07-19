function name(){
    console.log('Abhishek kumar')
};

name(); //name is just refernce and adding () means execution.

function addTwoNum(num1, num2){
    let result = num1 + num2;
    return result;
};

addTwoNum(20,'a');

const result = addTwoNum(3,5);
console.log('result:',result);

function userLogin(username){
    //if(username === undefined)
    if(!username){  // ! mark is used for fasle case.
        console.log('Please enter a username.');
        return;
    }
    return `${username} just logged in!`
}

console.log(userLogin());

function userLogin1(username = 'abhi'){
    //if(username === undefined)
    if(!username){  // ! mark is used for fasle case.
        console.log('Please enter a username.'); //this if consition will never execute as in the parameter itself username is mentioned.
        return;
    }
    return `${username} just logged in!`
}

console.log(userLogin1()); //we can overwrite the username by calling the function.

//Don't have to mention the number of parameters in advance.
//***************************REST OPERATOR**********************************//

function calculateCartPrice(...num1){ //Here we have used rest operator (...) to pass infinite number of parameters in the function and it returns an array.
    return num1;
}

console.log(calculateCartPrice(200,300,500));

function cartItem(val1, val2,...num){
    return val1,val2,num;
}

let one,two,three = cartItem(100,200,300,400,500);
console.log('val1:',one);
console.log('val2:',two);
console.log('num:',three);

//passing object in a function.
const user = {
    username:'abhishekkumar',
    age:23
}

function handleObject(user){
    console.log(`user name is ${user.username} and user age is ${user.age}`);
}

handleObject(user);
//we can also directly pass our object in the function.
handleObject({
    username:'abhi',
    age:23
});

const arr =[1,2,3,4,4,5,6,7];
function getarray(arr){
    return arr[2];
}
console.log(getarray(arr));

