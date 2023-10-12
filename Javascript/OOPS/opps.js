// // const user1 = {
// //     firstName: "Adfar",
// //     lastName : "Rasheed",
// //     age:25,
// //     getBirthYear: function(){
// //         return new Date().getFullYear() -user1.age
// //     }
// // }
// // const user2 = {
// //     firstName: "Aryan",
// //     lastName : "Jain",
// //     age:24,
// //     getBirthYear: function(){
// //         return new Date().getFullYear() -user2.age
// //     }
// // }
// function getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }
// function CreateUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     // getBirthYear:CreateUser.commonMethods.getBirthYear
    
//   };
//   return user;
// }
// // CreateUser.commonMethods = {
// //     getBirthYear: function () {
// //         return new Date().getFullYear() - this.age;
// //       } 
// // }

// const user1 = CreateUser("Adfar","Rasheed",25);
// const user2 = CreateUser("Aryan","Jain",24);

function CreateUser(firstName,lastName,age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
}
CreateUser.prototype.getBirthYear = 
    function () {
    return new Date().getFullYear() - this.age;

} 
CreateUser.prototype.getFullName = 
function(){
    return `${this.firstName} ${this.lastName}` ;
}

 const user1 =new CreateUser("Adfar","Rasheed",25);
 const user2 =new CreateUser("Aryan","Jain",24);



// function greet(){
//     console.log(this)
//     console.log("Adfar")
    
// }

