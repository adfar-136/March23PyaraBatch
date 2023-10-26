// class CreateUser{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getBirthYear () {
//         return new Date().getFullYear() - this.age;
//     }
//     getFullName (){
//         return `${this.firstName} ${this.lastName}` ;
//     }
// }
// const user1 =new CreateUser("Adfar","Rasheed",25);
// const user2 =new CreateUser("Aryan","Jain",24);
// // // class CreateUser{
// // //     #age
// // //     constructor(firstName,lastName,age){
// // //         this.firstName = firstName;
// // //         this.lastName = lastName;
// // //         this.#age= age;
// // //     }
// // //     #namee = "Adfarrrr"
// // //     getBirthYear () {
// // //         console.log(this.#namee);
// // //         console.log(this.#getFullName())
// // //         return new Date().getFullYear() - this.#age;
// // //     }
// // //     #getFullName (){
// // //         return `${this.firstName} ${this.lastName}` ;
// // //     }
// // // }
// // // const user1 =new CreateUser("Adfar","Rasheed",25);
// // // const user2 =new CreateUser("Aryan","Jain",24);
// // // // console.log(user2.#age)
// // // console.log(user1.getBirthYear());

// // // // console.log(user2.#getFullName());
// // const user = {
// //     firstName :"Adfar",
// //     lastName:"Rasheed",
// //     age:25,
// //     get fullName (){
// //         return `${this.firstName} ${this.lastName}`
// //     },
// //     set fullName(x){
// //         let splitt = x.split(" ")
// //         this.firstName = splitt[0];
// //         this.lastName = splitt[1];
// //     },
// //     get agee(){
// //         return  `My Age is :${this.age}`;
// //     },
// //     set agee(newAge){
// //         if(newAge>0 && newAge <=100){
// //             this.age = newAge;
// //         } else {
// //             console.log("Addmi Margaya")
// //         }
// //     }

// // }

// // console.log(user.agee)
// // user.agee= -13;
// // console.log(user.agee)

// // // user.firstName= "Aryan";
// // // user.lastName= "Aryan";
// // // user.fullName = "Aryan Jain"
// // // console.log(user.fullName)

const newton = {
  couse: "mern",
  apple: function () {
    return "hello";
  },
};
console.log(newton);
let newfun = {
  pp: "am",
};
newfun.__proto__ = newton; 
console.log(newfun);
console.log(newton.couse);
console.log(newton.apple());
console.log(newfun.pp);
console.log(newfun.couse);
console.log(newfun.apple());
// newfun.prototype.couse="hp";
// console.log(newfun.prototype.couse);
// console.log(newton.couse);
