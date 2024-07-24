const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((items) => items+10);
console.log(newNums);

//here the filter method does not return an array with 10 added to each number as filter method is used to filter out things and not to do the operations.

const ansArr = []
myNums.forEach(
    function(item){
        ansArr.push(item+10)
    }
);
console.log(ansArr);

//************************************MAP*****************************//
const newNums1 = myNums.map((item) => item + 10);
console.log(newNums1);


//****************************************CHAINING*****************************//
const newNums2 = myNums
                    .map((num) => num*10)
                        .map((num) => num + 1)
                            .filter((num) => num > 40);

console.log(newNums2);