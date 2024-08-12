
// var c = 300
// let a = 300

if (true) {
    let a = 10
    const b =20
    // var c = 30
    
    // console.log(a);

}

// console.log(a);
// console.log(c);

// ***********FUNCTION IN SCOPE********************

function parent(){
       userName="pooja gupta"
        function child(){
            childName="don't know"
            console.log(childName);
            
        }
        
       
         child()   
         console.log(userName);   
}

//  parent()

// ****************IF/ELSE******************

if (true) {
    const a = 10
    if (a===10) {
     var  b = "hii"
       const a = 20
    var b = 300
        console.log(b);        
    }  
    console.log(a);  
}

const a=20;

// *************************interesting*********************
// console.log(first(5));

function first(value){
    return value + 1;

}

// console.log(second(8));
const second = function(value1)
{
    return value1+1;
}

















