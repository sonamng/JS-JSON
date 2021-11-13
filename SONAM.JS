

const fs=require("fs")
     console.log("LOGIN FACEBOCK::")
     var n=require("readline-sync")
     var username=n.question("Enter Youe Name::")
     if(username=="sonam"){
          console.log("name is right")
          var lastname=n.question("Enter The Last Name::")
          if(lastname==""){
               console.log("next")
               var Email=n.question("Enter The Email Id::")
               if(Email=="sonam20@navgurukul.org"){
                    console.log("correct Email")
                    var password=n.question("Enter The Password::")
                    if(password=="navgurukul123"){
                         console.log("right password")
                    console.log("log in succsesfull")
                         obj={username:"sonam",lastname:"",Email:"sonam20@navgurukul.org",passwod:"navgurukul123"}
     const jsondata=JSON.stringify(obj)
fs.writeFileSync("json1.json",jsondata,(err)=>{
console.log("succsesfull")
})
                    }else{
                         console.log("agin cheak password")
                    }
               }else{
                    console.log("Email not correct")
               }
          }else{
               console.log("wrong your last name")
          }
     }else{
     console.log("Did'nt login from this name::")


     console.log("creat new account::")
     console.log("sing in new facebock account:")
     var n=require("readline-sync")
     var username=n.question("Enter your name:")
     if(username>="a to z"){
          console.log("right your name")
          var lastname=n.question("Enter the last name::")
          if(lastname>="a to z"){
               console.log("next")
               var Email=n.question("enter the Email::")
               if(Email>="a to z"){
                    console.log("right your email")
                    var password=n.question("enter the password::")
                    if(password>="1 to 9" || "a to z"){
                         console.log("loin succese")
                    }
               }
          }
     }
}
     obj={username:username,lastname:lastname,Email:Email,passwod:password}
     const jsondata=JSON.stringify(obj)
fs.writeFileSync("json3.json",jsondata,(err)=>{
console.log("**finaly succese your account**")
})
