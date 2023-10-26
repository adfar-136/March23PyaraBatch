var promise = new Promise((resolve,response)=>{
   setTimeout(()=>{
    resolve("Any Data")
   },1000)
});
var promise2 = new Promise((resolve,response)=>{
    setTimeout(()=>{
     resolve("Any Data")
    },5000)
 })
async function executePromise(){
    console.log("hello");
    const data = await promise;
    console.log(data);
    console.log("Adfar");
    const data2 = await promise2;
    console.log(data2);
}
executePromise();