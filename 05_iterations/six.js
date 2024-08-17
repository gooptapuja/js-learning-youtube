const mynum = [1,2,3,4,5,6,7,8,9,10]

const mynum1 =mynum.filter((val)=> val>3)
//  console.log(mynum1);


// MAP
const mapFun= mynum.map((num)=>num+10)
// console.log(mapFun);

// chaining method
const newNum = mynum.map((a)=>a*10).map((a)=>a+1).map((a)=>a*2).filter((a)=>a>44);
console.log(newNum);
