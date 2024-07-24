//**********************************************************REDUCE**********************************************//
const number = [1,2,3,4,5,6,7,8,9];
const testReduce = number.reduce((accumulator, currentvalue) => accumulator + currentvalue);
//here the initial value of accumulator is number[0] = 1 and currentvalue is number[1] = 2
console.log(testReduce);

//now with intial value
const initialVlaue = 0;
const testReduce1 = number.reduce((acc,curr) => acc+curr,initialVlaue);
//this time since the intialValue is specified so the initial value of accumulator is initialValue = 0 and inital value of curr is number[0] = 1.
console.log(testReduce1);

const shoppingCart = [
    {
        courseName: 'JS Tutorials',
        price: 999
    },
    {
        courseName: 'python Tutorials',
        price: 1999
    },
    {
        courseName: 'CPP Tutorials',
        price: 2999
    },
    {
        courseName: '.NET Tutorials',
        price: 3999
    }
]

const serviceCharge = 99;
const totalBill = shoppingCart.reduce((acc,item) => acc+item.price,serviceCharge); //here the inital value of accumulator is 0 and intial value of currentValue is shoppingCart[0] = first object in the array.
console.log(totalBill);