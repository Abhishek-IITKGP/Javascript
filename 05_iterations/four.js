const coding = ['java','cpp','python','javascript','c#']
//**************************forEach callback function**************************//
coding.forEach(
    function(item){
        console.log(item);
    }
)

coding.forEach((item) => {  //foreach callback function using arrow function
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //using an existing function using a callback function.

coding.forEach((item, index, arr) => {
    console.log(item,index,arr);
})

const myCoding = [
    
    {language: 'javascript',
    filename: '.js'},

    {language: 'java',
    filename: '.java'},

    {language: 'C++',
    filename: '.cpp'}

]

myCoding.forEach((item) => console.log(item.language, item.filename))