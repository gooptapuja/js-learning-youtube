const user ={
    userName:"pooja",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.userName},welcome to the website`);   
        console.log(this);         
    }  
}

// user.welcomeMessage()
// user.userName= "dev"
// user.welcomeMessage()
// let a = 10;
// console.log(this);

// *****ARROW FUNCTION ******************

function arrowfunc(){
    // let age = 20
    // console.log(this.age);
    
}

// arrowfunc()

// const one = function(){
//     let age = 20
//     console.log(this.age);
    
// }

// const one = ()=>{
//     let age = 20
//     console.log(this.age);
// }

// const arrow = (num1,num2)=>{
//     return num1+num2
// }

// const arrow = (num1,num2)=> (num1+num2 ) /***implicit return */
const arrow = (num1,num2)=> ({userName:"pooja"})
// we can use arrow function in loops as well

console.log(arrow(userName = "neil"));







