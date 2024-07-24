const myArray = [1,2,3,4,5,6,7,8,9,10]
const fun = myArray.forEach((item) => console.log(item))

console.log(fun); //it is giving undefined, beacuse a forEach callback function does not return anything.

//filter callback function
let newnums = myArray.filter((num) => num > 4)

console.log(newnums); //filter callback function returns an array unlike forEach but both are a type of call back function.


//another way
const myNums = []
newnums.forEach((num) => {
    if(num > 4){
        myNums.push(num)
    }
})

for (let index = 0; index < myNums.length; index++) {
    console.log(myNums[index]);
}


//forEach method do not return anything so for example when it is applied on an array no new array is created on the other hand if we apply filter it make subarray from the exsisting array
//on which the callback function is applied without modifying the original array and hence felter method resturns somthing unlike the forEach method.

