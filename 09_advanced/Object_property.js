const descriptor = Object.getOwnPropertyDescriptor(Math,'PI'); //through this we can see the properties of object:
//writable: whether we can modify it or not
//enumerable: whether we can iterate or not.
//configurable.

//By deafult when we create an object there properties are true but we can change these properties.

console.log(descriptor);

const chai = {
    name: 'gingerChai',
    price: 250,
    isAvailable: true
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

//use Object.entries(object name) to iterate the objects.
for (let [key,value] of Object.entries(chai)) {  //here we can iterate the object chai as its enumerable property is true by default.
    console.log(key,value);
}

chai.name = 'masalachai'  //similarly we can change the name as its writable property is also set as true by default.
console.log(chai.name);

Object.defineProperty(chai,'name',{  //we can explicitly change the property like this.
    writable: false,
    enumerable: true,
    configurable: true
})

chai.name = 'gingerchai'; //this time the name will not change as we explicitly change the writable property from true to false.
console.log(`changed chai name: ${chai.name}`);

Object.defineProperty(chai,'name',{  //here we change the enumerable property of name key only in the chai object.
    writable: true,
    enumerable: false,
    configurable: true
})

for ( [key,value] of Object.entries(chai)) {  //it will not print the name key but prints only price and isAvailable key.
    console.log(`${key}:${value}`);    
    
}

