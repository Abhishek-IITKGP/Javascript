let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //object datatype

const myCreatedDate = new Date(2024,8,27);

console.log(myCreatedDate.toLocaleDateString());

let IndiaDate = new Date('09-27-2024');
console.log(IndiaDate.toDateString());

//******TIMESTAMPS*******//
let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myDate.getTime()); //time stamp from created date

console.log(myDate.getDay());
console.log(myDate.getMonth() + 1);

console.log(myDate.toLocaleDateString('default',{
    weekday: 'long'
}));