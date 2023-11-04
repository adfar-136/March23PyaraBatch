function roomvolume(l){
    return function(b){
        return function(h){
            return l*b*h;
        }
    }
}
console.log(roomvolume(10)(14)(10));