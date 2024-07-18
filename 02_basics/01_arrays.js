const myArray = [1,2,3,4,5,6,7];
//Properties => mixed datatype, can be resized, array elements cannot be assessed using arbitray string.
//zero-based indexing, It make shallow copies when making a copy of an object.
//shallow copy => the copy of element that shares the same reference point, i.e. all the changes done in the copy will make changes in the original array also.
//Deep-copy => properties do not share the same refernce.

//********************METHODS*******************//
console.log(myArray[0]);

const myArray2 = new Array('abhishek',23,'delhi');
//array have many prototypes (methods) and one property of .length.

myArray.push(100); //to add an element to the array
console.log(myArray);

myArray.pop(); //remove the last value
console.log(myArray);

myArray.unshift(9); //it adds the element in the beginning of the array. but it is time taking as all the elements are moved one step ahead.
console.log(myArray);

myArray.shift(); //removes element from the start of array.
console.log(myArray);


//*************QUESTIONAIR METHODS IN ARRAY************//

console.log(myArray.includes(7)); //it returns a boolean value.
console.log(myArray.indexOf(3));

console.log(myArray.join()); //it binds the array and convert into a string datatype.
console.log(myArray2.toString()); //it is also convert array into string.

console.log(typeof myArray2);

console.log(typeof myArray);

//join => parameter: separator, if no separator is provided the lements are separated by comma
//toString => we cannot specify separator the default separator is comma. join is called explicitly on array whereas toString is called implicitly by JS to convert into string whenever the output is expected as string like in alert() or console.log().

let arr = [1, 2, 3];
console.log(arr); // Internally calls arr.toString() to convert the array to a string
console.log(arr.join('-')); //separator specified.

//*********************SLICE AND SPLICE********************//

const myar1 = myArray.slice(1,3);
console.log('slice:',myar1); //slice does not manipulate the original array and the last index is not included in the result.
console.log(myArray);

const myar2 = myArray.splice(1,3);
console.log('splice',myar2); //splice manipulates the original array and last index is included. splice deletes the sub-array provided.

console.log('original',myArray);