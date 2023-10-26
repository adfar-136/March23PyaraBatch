function combineFunction(){
    var promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ADfar")
        },3000)
    })
    var promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Aryan")
        },1000)
    });
    var combinePromises = Promise.all([promise1,promise2])
    return combinePromises
}
combineFunction().then((result)=>{
    console.log(result)
})