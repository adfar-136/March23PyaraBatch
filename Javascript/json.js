// const adfar = {name:"Adfar",age:26,residence:"kashmir"};
// const jsonData = JSON.stringify(adfar);
// console.log(jsonData);

// const Aryan = '{"name":"Aryan","age":24,"residencee":"kota"}';
// const objdata = JSON.parse(Aryan)
// console.log(objdata);

const adfar = {name:"Adfar",age:26,residence:"kashmir"};
// const jsonData = JSON.stringify(adfar,(key,value)=>{
//    if(key === "age"){
//       return undefined;//exclude some property
//    }
//    return value;
// })
const jsonData = JSON.stringify(adfar,null,10);
console.log(jsonData);
