// var date = new Date();
// var date = new Date('June 22,2023');
// console.log(date)

var date1 = new Date("2023-10-01");
var date2 = new Date();
var diff = date2.getTime()-date1.getTime();
console.log(diff)
var dayDiff = diff/(1000*60*60*24);
console.log(dayDiff)
