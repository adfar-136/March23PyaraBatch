var obj = {
    name:"Adfar",
    age:25,
    gender:"male"
}

Object.defineProperty(obj,'salary',{
    value:3000,
    enumerable:true
})
for(let i in obj){
    console.log(i)
}
console.log(obj.salary)
// // console.log(obj["name"])
// var keyarr= Object.keys(obj)
// // var valarr = Object.values(obj)
// console.log(keyarr)
// console.log(valarr)