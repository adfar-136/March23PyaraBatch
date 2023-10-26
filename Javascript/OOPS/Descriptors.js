const person = {
    firstName : "Adfar",
    lastName:"Rasheed",
}
const d1 = Object.getOwnPropertyDescriptor(person,"firstName");
const d2 = Object.getOwnPropertyDescriptor(person,"lastName");
console.log(d1)
console.log(d2)