const heros = ['thor','spiderman','ironman'];
const dc = ['superman','flash','batman'];

heros.push(dc);
console.log(heros); //push array into an array.

heros.pop();
const allHeros = heros.concat(dc); //it concates two different arrays.
console.log(allHeros);

const allNewHeros = [...heros,...dc]; //thsi is called spreadign and it is most direct way of concating two arrays.
console.log(allNewHeros);

const newArray = [1,2,3,[0,8,3],34,56,67,[100,200,300,[90,80]]];
const flatArr = newArray.flat(Infinity); //flat methods spreads all the nested array in a single array.
console.log(flatArr);

//**********************CONVERTING OR MAKING OF ARRAY*******************************//

console.log(Array.isArray('abhishek')); //checks if the string 'abhishek' is an array.
console.log(Array.from('abhishek')); //convert the string into an array.

const value1 = 100;
const value2 = 200;
const value3 = 300;

console.log(Array.of(value1,value2,value3)); //make array by combing different elements.