//for loop

for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log('5 is best !');
        break;
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop: ${j}`);
        
    }
    
}

let myArray = ['superman','batman','flash']
for (let x = 0; x <= myArray.length; x++) {
    console.log(myArray[x]);
    
}