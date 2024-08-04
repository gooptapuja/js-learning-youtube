//   primitive datatypes(call by value)
// string,number,boolean,null,undefined,bigInt,symbol
const string = "Pooja";
let number = 1234
let boolean ="false"
let userEmail
let bignumber=788865433333333333312546
const id = Symbol('123a');

//Non primitive (Reference type)-directly consume memory space
// Object,array,functions
// ARRAY

let students = ["Nitisha","reema","aditi"];
// Object

let students1 =  {
    id: 11,
    name:"Pratham",
}
// Functions

let storefunction = function(){
    console.log("hello javascript");
}

// console.log(typeof students1);
// ***********************MEMORIES***********************
// stack(primitive)-copy
// heap(non-primitive)-refrence

let nameSt = "hiteshi"
let anothername = nameSt
anothername = 1899

// console.log(anothername);

// heap
let memory1 ={
    email:"gupta67@2gmail.com",
    age:25,
}

let memory2 = memory1;
memory2.age = 27;
console.log(memory2);





