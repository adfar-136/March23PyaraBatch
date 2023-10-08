// var a =10;
// var b = a;
// b= 30;
// console.log(a)
// console.log(b)
var obj = {
    name : "Adfar",
    age: 25,
    gender:"male"
}
console.log(obj)
// var newObj = {...obj};
var newObj = Object.assign({},obj);
obj.name="Aryan";
console.log(obj);
console.log(newObj);
