let a = [2,4,6,8,10];
let b = a.map(function(x){
    //  console.log(x,i)
    return x>4;
})
console.log(b)
let arr = [
    
    ["Adfar","Rasheed","Dar"],
    ["HEllo","welcome","Class"],
    ["a","b","c"]
    
]
let c = arr.map((item,index)=>{
    return item.map((item1,index1)=>{
        return item1
    })
})
console.log(c[1][1])