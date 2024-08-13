const userEmail = ""

if (userEmail) {
    console.log("have values");        
}
else{
    console.log("don't have values");    
}

// falsy value
// false,0, -0,BigInt 0n, "",null, undefined,NaN

// truthy value
// "0","false"," ",[],{},function()

// Nullish Coalescing Operator (??):null undefined

// let val1;
// val1 = 5??10
// val1 = null??10??20

// console.log(val1);

// terniary operator

// condition ?true :false
const age = 15

age <=20?console.log(`age is 15`):console.log(`age is 15`);

