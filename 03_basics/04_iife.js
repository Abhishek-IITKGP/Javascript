//****************************IMMEDIATELY INVOKED FUNCTION EXPRESSION*****************************//

//these are called Named IIFE
(function breakFast(a,b,c){
    console.log(`In the breakfast we have ${a},${b} and ${c}`);
}
)('toast','omellete','orange juice'); //Here we have to put semicolon as the code needs to be stop, here it is nessessary.

//so there are two paranthesis '()' first one is for the function definition and 2nd one is for execution.
//why iife:when we want to execute our function imediatly e.g. when the database connection establishes and file run. Another reason is to protect the function from any global pollution.

//using arrow function. Un-nammed iife.
( (num1, num2) => {
    console.log(num1 + num2);
})(1,3);