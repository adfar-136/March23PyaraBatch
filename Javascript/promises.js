var promise = new Promise((resolve,reject)=>{
    var age = 25;
    if(age<20){
        resolve("resolved");
    }
    else{
        reject("rejected");
    }
})
promise.then((result)=>{
    console.log(result)
},(error)=>{
    console.log(error)
})

