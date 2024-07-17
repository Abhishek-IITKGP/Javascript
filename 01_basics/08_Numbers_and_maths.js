const score = new Number(913);
console.log(score);
//all the methods associated with Number is found in console
//[prototype]: Number

console.log(score.toString().length); //Number conversion to string has many advatage as we can use all the methods of string with the number.

console.log(score.toFixed(2)); //put two decimal places.

console.log(score.toPrecision(2)); //convert the number upto the specified number of precsion digits.


//**************MATHS****************//
//Its a library in javascript

console.log(Math);
console.log(Math.abs(-4)); //absolute
console.log(Math.round(4.9)); //for rounding off
console.log(Math.ceil(4.2)); //always roundoff to the upped value.
console.log(Math.floor(4.2)); //alwasy roundoff to the lower value.

console.log(Math.min(1,2,3,4)); //***min and max method****/
console.log(Math.max(29,45,22,0));

console.log(Math.floor(Math.random()*10)+1); //value always comes between 0 and 1.

//**************General formula to get the numbers in a given range***************//
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1) + min));
