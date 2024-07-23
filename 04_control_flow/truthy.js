const userEmail = 'abhishek@gmail.com';

if(userEmail){ // here it is assumed that the string userEmail is true by JS.
    console.log('got user email');
}else{
    console.log("don't have user email");
}

const userEmail1 = '';
if(userEmail1){ //here the string is empty so it is assumed as false value by JS.
    console.log('got email');
}else{
    console.log("do.t have email");
}

//**********************************************FLASY VALUE************************************//
//FALSE
//0
//-0
//BIGINT
//NULL
//""
//UNDEFINED
//NaN

//******************************************TRUTHY VALUE***************************************//
//'0'
//'false'
//' '
//[]
//{}
//function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log('object is empty');
}

//*******************************Nullish coalescing operator(??)***********************************//

let val1;
val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10; //this opertor check for the null or undefined value if it gets somthing then it ti fine otherwise it set the value which is right of ??.
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

val1 = null ?? 10 ?? 20;
console.log(val1);

//Ternary operator (a special type of if-else statement)

const price = 100;

(price <= 80)/**this is the condition */ ? console.log('price is less')/**if the written condition is true */ : console.log('price is perfect') /**if the written condition is false */;