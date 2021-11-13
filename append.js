



const fs=require("fs");
fs.writeFileSync("append.txt","hello sonam how are you" )
// add karne ke liye 
fs.appendFileSync("append.txt"," tell me what about you:")


/*output this throw becouse pahle wala data ke ander append karwa 
rahe hat use file me
hello sonam how are you tell me what about you:*/