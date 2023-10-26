let promise = new Promise((resolve,reject)=>{
    resolve("Adfar Rashid")
})
promise.then(
    new Promise((resolve,reject)=>{
        resolve("Aryan")
    }).then((result1)=>{
        console.log(result1)
    })
).then((result)=>console.log(result))