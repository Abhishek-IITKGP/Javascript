//***************************GLOBAL SCOPE********************************//
var c = 400; //it can be overwritten by any block scope re-declaration.
console.log(`in global scope c: ${c}`);

//****************************BLOCK SCOPE*******************************//
if (true){
    let a = 20;
    const b = 30;
    var c = 40;
    console.log(`inside the block score c: ${c}`);
}

//console.log(a);
//console.log(b);
console.log(c); //this is the problem with var we can access the var variable even outside the scope.

//****************************************NESTED-SCOPE*****************************************//

function one(){
    const name = 'abhishek';

    function two(){
        const website = 'www.google.co.in'; //outer scope function cannot access this.
        console.log(name);
    }
    //console.log(website); cannot access inner scope content by an outer scope function.
    two(); //it will call the inner scope function.
}

one(); //calling the outer scope function.

if (true){
    const username = 'abhishek';
    if (username == 'abhishek'){
        const website = 'www.abhishek.com';
        console.log(username + website); //it can access both username and website as it is a inner scope function.
    }
    //console.log(website); //it will cause error.
}

//console.log(username); //it will cause error as it is trying to access a block-scope element, it can only access a global access element.


//*********************************************HOISTING*******************************************//
console.log(addOne(5)); //it will not cause any error.
function addOne(num){
    return num+1;
}

//addTwoNum(10); //it will cause error bcoz this time we are initialising the function and storig them in a variable.
const addTwoNum = function(num){
    return num+2;
}
console.log(addTwoNum(10)); //here it will not cause any error as the variable is initialised this time.