

/*yaha file ko read karwa rahe hai*/
// const fs=require("fs");
// const buf_data=fs.readFileSync("sonam.txt")
// console.log(buf_data)

// buffer datatype  hai
/*<Buffer 68 65 6c 6c 6f 20 73 6f 6e 61 6d 20 68 6f 77 20 61 72 65 20 79 6f 75 74 65 6c 6c 20 6d 65 20 77 68 61 74 20 61 62 6f 75 74 20 79 6f 75 3a>*/


const fs=require("fs");
const a=fs.readFileSync("SONAM.JS")
console.log(a)