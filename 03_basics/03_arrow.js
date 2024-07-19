//THIS keyword to refere the current context.
const user = {
    username: 'abhishek',
    price: 999,
    messege: function(){
        console.log(`Hello ${this.username} welcome to the website`);
        console.log(this);
    }
}

user.messege();
// user.username = 'abhi';
// user.messege();

console.log(this); //this gives the current context as ***empty object*** because we are in node environment as there are no global object here.
//but this is not in case when we are executing our code on browser because browser has window object:
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

function chai(){
    console.log(this);
    let username = 'xyzz'
    console.log(this.username); //this will return undefined.
}

chai();

const coffee = function(){
    console.log('hi!');
}
coffee();

//************************************ARROW-FUNCTION********************************//
const milk = () => {
    console.log(this); //so here we can use 'this' keyword.
}

milk();

const addTwoNum = (num1, num2) => (num1 + num2);
console.log(addTwoNum(2,3));

const containObj = () => ({username: 'abhishek'});
console.log(containObj());

