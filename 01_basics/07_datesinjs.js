let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedate = new Date(2024,0,23)
// let myCreatedate = new Date(2024,0,23,05,25)
// let myCreatedate = new Date("02-24-2024")
// console.log(myCreatedate.toString());
// console.log(myCreatedate.toLocaleString());
let myTime = Date.now()
// console.log(myTime);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.toLocaleString('default',{
    weekday:"long"
   
}));







