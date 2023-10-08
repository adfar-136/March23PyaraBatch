// var arr = [1,4,2]
// function adfar(x,y,z){
//   console.log(x,y,z)
// }
// adfar(...arr);

var arr1 = [123,23,1,3,1]
var arr2 = [34,"gfdf","6",87]
var arr5 = arr1;
arr1[0] = "Adfar";
var arr3 = [...arr1,...arr2];
console.log(arr3);
var arr4 = [2,4,"er",...arr2,76,36,...arr2,7366]
// console.log(arr4)
// var arr2 = [...arr]
// console.log(arr2)