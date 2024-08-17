const mynum2 = [1,2,3,4,5];
const a = 1;
const myTotal = mynum2.reduce((a,val)=>a*val,a);
// console.log(`a:${a} and value :${val}`);

// console.log(myTotal);

const shoppingCart = [
    {
        Course:"java",
        price:999
    },
    {
        Course:"python",
        price:1999
    },
    {
        Course:"JS",
        price:2999
    },
    {
        Course:"DS",
        price:4999
    }
]

const totalSum = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalSum);





