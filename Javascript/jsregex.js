// let pattern1 = /[^abc]/g;
// let pattern2 = /[abc]/g;
// let pattern3 = /[09]/g;
// let pattern4 = /[^09]/g;/
// let pattern5 = /[0-9]/g;
// let pattern5 = /[A-Za-z0-9]/g;
// let pattern5 = /[^A-Za-z0-9]/g;
// let pattern5 = /\w/g;
// let text = "My is Adfar Name and Name 09/08/1998 znd adna 09/12/2000 name i am 26 years old";

// let pattern5 = /\d{3}/g;
// let pattern5 = /\d{2}\/\d{2}\/\d{4}/g;
// let pattern5 = /\d{2}-\d{2}-\d{4}/g;
// let pattern5 = /a*/g;
// let pattern5 = /a+/g;
// let text1 = "My is Adfaar Name aaand Naame name i am 26 years old";
// let pattern5 = /a?/g;
// let pattern5 = /a{3}/g;
let pattern5 = /a{2,5}/g;
let email = "adfarrasheed136@gmail.com";
let emailpattern = /[a-zA-Z0-9-_.]+@[a-zA-Z-_.]+\.[a-zA-Z]{2,5}/;
const pattern = /adfar/
let match = email.match(emailpattern);
let test = pattern.test(email);
console.log(test);