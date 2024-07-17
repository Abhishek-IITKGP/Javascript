const name = 'abhishek';
const age = '23';

// console.log(name+age);


//using backtext
console.log(`my name is ${name} and my age is ${age}`);

const gameName = new String('abhishek');
console.log(typeof gameName);
//the datatype of gameName here is object
//when we declare our sring in this way each character of the string is represented as a key:value pair.
//When we ran the code on console we got this
// 0:'a'
// 1:'b'
// 2:'h'
// 3:'i'
// 4:'s'
// 5:'h'
// 6:'e'
// 7:'k'
//length: 8. It is one of the method of string object.
//[protoype]:string. all the methods we can get from here in the dropdown.
//and there are lot of methods associated with this object string.

console.log(gameName[0]);  //it should not be confused with array.

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.indexOf('a'));

//string slicing
console.log(gameName.substring(0,5)); //last index is not included

const anotherString = gameName.substring(0,4);
console.log(anotherString);

//we cannot give negative index in the substring method.
//but we can use -ev index in slice method.

console.log(gameName.slice(-8,4));  //here -8 means 8 index from the left.

//******TRIM******//
const newStingOne = '   John   '
console.log(newStingOne);
console.log(newStingOne.trim()); //trim basically removes any unwanted spaces from the string.

const newStingtwo = '   j   ohn...'
console.log(newStingtwo.trim()); //it only removes spaces from the start and end of the string.

//********REPLACE*********//
const url = 'https://abhishek.com/abhishek%20kumar'
console.log(url.replace('%20','-'));  //'%20' changes to '-'

console.log(url.includes('abhishek')); //Finds a substring or a character in a long string.

//*********SPLIT**********//
const address = 'Hitech-city Madhapur'
console.log(address.split('-')); //It resturns an array separated by the provided separator symbol.
console.log(address.split(' ',1)); //'Limit' limits the number of strings to put in the array, after the limit all the substrings are leftover.
console.log(address.split()) //No splitting
console.log(address.split('')); //All the characters or symbols are splitted and returned in the array.
