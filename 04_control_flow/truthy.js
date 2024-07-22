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