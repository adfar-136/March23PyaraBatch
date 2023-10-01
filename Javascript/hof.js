const adfar = function(x){
    return function(y){
        return function(z){
            console.log("My name is"+x+"My age is"+y+z)
        }
    }
}
adfar("Aryan")(24)(455);
// const rohit = adfar("Aryan")
// rohit(28)