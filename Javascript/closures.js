function a(){
    var x=10;
    b();
    function b(){
        var y = 20;
        console.log(x,y)
    }
}
a();