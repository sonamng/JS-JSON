


var fs = require("fs");
let a=readlineSync = require("readline-sync");
// let user=readlineSync.question("enter your name::");
var name=a.question("enter the name:")
var age=a.question("enter the age:")
b={name:name,age:age}
var myjson=JSON.stringify(b)
fs.appendFileSync("name.json",myjson)