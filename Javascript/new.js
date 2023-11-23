function volume(l){
    return function (b){
        return function (c){
            return l*b*c;
        }
    }
}
// console.log(volume(2,3))