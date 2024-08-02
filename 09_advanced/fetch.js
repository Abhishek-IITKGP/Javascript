//*************************************************FETCH DATA FROM AN API*****************************************//

//**************************using async-await*******************************//
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


//*****************************************using fectch************************************//
fetch('https://jsonplaceholder.typicode.com/todos/2').then((response) => {   //First then
    return response.json()
}).then((data) => {      //second then. This is called CHAINING.
    console.log(data);
    
}).catch((error) => {    //catch
    console.log(error);
    
})