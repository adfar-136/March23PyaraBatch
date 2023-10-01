let arr = [10,2,4,3,5,4,8,80]
let arreven = arr.filter((x,i)=>{
    return x%2==0;
})
let arrodd = arr.filter((x,i)=>{
    return x%2!=0;
})
console.log(arreven)
console.log(arrodd)