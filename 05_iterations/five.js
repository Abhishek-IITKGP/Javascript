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

