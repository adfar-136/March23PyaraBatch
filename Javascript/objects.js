var Adfar = {
    name:"Adfar Rasheed",
    description: "This is a description of the project.",
    age:26,
    salary:150,
    hello: function(){
        return this.name + " has " + this.salary ;
    }
}
for(let x in Adfar){
    console.log(Adfar[x]())
}