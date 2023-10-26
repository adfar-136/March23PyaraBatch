class User{
    constructor(firstName,lastName,age){
        this.firstName =firstName;
    this.lastName=lastName;
    this.age=age;
    }
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    get fullName (){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(x){
        let splitt = x.split(" ")
        this.firstName = splitt[0];
        this.lastName = splitt[1];
    }
}
class Student extends User{
    constructor(firstName,lastName,age,subject){
        super(firstName,lastName,age)
        this.subject = subject;
    }
}
class Employee extends User{
   constructor(firstName,lastName,age,company){
    super(firstName,lastName,age)
    this.company = company;
   }
}

const user1 = new User("Adfar","Rasheed",26)
const student1 = new Student("Aryan","Jain",24,"JS")
const employee1 = new Employee("Gurpreet","Singh",23,"Google")