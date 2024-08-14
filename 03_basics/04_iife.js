// IIFE-immediately invoked function expression

(function myFunc(){
    // Nmaed iife
    console.log(`my function called`);
    
})();

((age)=>{
    // UNNAmED IIFE
    console.log(`my function 2nd called ${age}`);
    
})(20);  