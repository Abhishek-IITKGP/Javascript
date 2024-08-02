//*****************************************create promise*************************************************//
const promise1 = new Promise(function(resolve, reject){
    //Do async task
    setTimeout(function(){
        console.log('Async task completes');
        resolve(); //it connects resolve() and then() 
    },1000);

})
    
//Consume promise
promise1.then(function(){
    console.log('Promise is consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve();
    })
}).then(function(){
    console.log('Async2 resolved');
    
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'abhishek',email:'abhishek@.com'})
    },1000)
})

promise3.then(function(user){
    console.log(user);  //then() and resolve() are connected. all the variables that we pass in resolve can be acessed by then(). 
    
});

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'abhishek',password:'12345'})
        }else{
            reject('error:something went wrong');
        }
    },1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username;  
}).then((myUsername) => {    //chaining
    console.log(myUsername);  
}).catch((e) => {
    console.log(e);
    
}).finally(() => {
    console.log('The promise is either resolved or rejected');
    
})

//***************************************************************************************************************//
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'ABC',password:'345'})
        }else{
            reject('ERROR!!!');
        }
    },1000)
})


//Another approach of consuming promises: async and await
async function consumePromise5(){
    try{                              //this is how we handle error in async await method using try-catch.
        const response = await promise5;
    console.log(response);  //async await cannot handle error automatically
    }catch(error){
        console.log(error);
        
    }
}

consumePromise5()

//fetching data from a API
async function getAllUser() {
    try{
        console.log('inside the getallusers');
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json()
        console.log(result);
    }catch(error){
        console.log(error,'there is some error');
        
    }
}
getAllUser()