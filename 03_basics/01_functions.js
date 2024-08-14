function myName (){
    console.log("pooja1");
    console.log("pooja2");
    console.log("pooja3");
    console.log("pooja4");
} 

// myName();

// function addTwoNo(num1,num2){
//     Sum=num1+num2
// }
// addTwoNo(3,"hy");
// console.log(Sum);

function addition(a,b){
    // let sum = a+b
    // // return sum;
   return a+b
}

const c = addition(9,10);
// console.log("sum:",c);



function loginUserMessage(username = "pooja"){
    if(username===undefined){
        console.log("Please check again");
        return;
    }
     return `I have successfully logged in,${username}`
}

const message =loginUserMessage("priti");
// console.log(message);

// *************rest operator and spread operator

function calculateStudent(a,...num1){
      return num1;
}
// console.log(calculateStudent(12,15,50));

// *************FUNCTIONS WITH OBJECTS AND ARRAY**********************

const functionObject={
     userName:"hitesh",
     price:900
}
 function usefunctionObject(anyobject){
  return `username is ${anyobject.userName} and price is ${anyobject.price}`;
}

// console.log(usefunctionObject(functionObject));

// ***************FUNCTION WITH ARRAY****************

const myNewArray = ["hi","pooja","here","and","my","age","is",34];

function useFunctionArray(array){
   return `The name is ${array[1]} and the age is ${array[7]}`
}

console.log(useFunctionArray([100,200,2000,400,900,90000]));





