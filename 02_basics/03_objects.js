// sigleton
// constructor
// objects can be fdefined or declared in two ways:literal and constructor

// object literals-key:value
const symbl = Symbol("key1")
const myObj1 = {
         "myname":"somil gupta",
         age:24,
         location:"hyderabad",
         [symbl]:"key2",
         email:"somil566@gmail.com",
         isHeLoogedin:true,
         myObj1Arra:["sunady","monday","tuesday"]

}

// console.log(myObj1.name);
// console.log(myObj1["myname"]);
// console.log(typeof myObj1[symbl]);

myObj1.age = 26
// console.log(myObj1);
// Object.freeze(myObj1)
myObj1.age = 30
// console.log(myObj1);

myObj1.greeting = function(){
    console.log("welcome to my home");
    
}

console.log(myObj1.greeting());

myObj1.greeting2 = function(){
    console.log(`this is my object,${this.email}`);
    
}

console.log(myObj1.greeting2());











