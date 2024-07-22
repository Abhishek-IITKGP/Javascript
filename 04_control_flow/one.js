// if
if (2!=3){
    console.log('executed');
}else{
    console.log('not executed');
}

if(2==="2"){ //'===' is called strict equality operator that checks for the data type also, due to which we see error here.
    console.log('executed');
}else{
    console.log('not executed');
}

if(2=='2'){
    console.log('executed');
}else{
    console.log('not executed');
}

const score = 200;

if(score > 100){
    const power= 'fly';
    var power1 ='fly1';
    console.log(power);
}

//console.log(power); //due to score as we have used const variable.
console.log(power1); //here we do not gey any error because we have used var keyword for defining our variable.

const balance = 2000;
if(balance > 1000) console.log('balance is more than 10000'); //we can write like this also.

if(balance < 500){
    console.log('less than 500');
}else if (balance < 900){
    console.log('less than 900');
}else{
    console.log('more than 1000');
}

const isLoggedIn = true;
const debitCard = true;
const isLoggedInGoogle = false;

if(isLoggedIn && debitCard){
    console.log('can go shopping');
}

if(isLoggedIn || debitCard || isLoggedIn){
    console.log('user logged in');
}


const month = 3;
switch(month){
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('march');
        break; //if there is no break statement it will execute all the code after matching the except the deafult case.
    case 4:
        console.log('april');
        break;
    default:
        console.log('default case match');
        break;
    
}