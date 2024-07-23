//forof loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting = 'good morning!'
for (const greet of greeting) {
    if(greet == ' '){
        continue //to avoid printing space.
    }
    console.log(`each character of the string is ${greet}`);
}


//*************************************************MAP*******************************************//
const map = new Map()
map.set('IN','india')
map.set('USA','india')
map.set('SL','sri lanka')

console.log(map); //in map the keys should be unique and in the same order as declared.

for (const itr of map) {
    console.log(itr); //it gives the number of arrays equal to the number of key value pairs.
}

for (const [key, value] of map) {
    console.log(key,':-',value); //in this way we can get both key and values
    
}

//***********************************forof loop on object*********************************//
const myObj = {
    game1: 'NFS',
    game2: 'spiderman',
    game3: 'batman'
}

// for (const [key, value] of myObj) {
//     console.log(key,':-',value);
// }
//BY DEFAULT OBJECTS ARE NOT ITERATABLE.

const myObject = {
    js:'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//forin loop

for (const key in myObject) {
    console.log(key); //it gives us all the keys
}

for (const key in myObject) {
    console.log(key, myObject[key]);
}