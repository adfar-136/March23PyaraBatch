function sum(...other){
     console.log(other);
     let summ = 0;
     for(let i of other){
        summ += i;
     }
    return summ
}
var result = sum(4,5,6,6,3,4,2,5,4,3,53,2,43,324,35,33,435,3,435,34,34)
console.log(result)