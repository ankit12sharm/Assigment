let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;



   function validateform(){
     if(username.value  == ""){
           document.getElementById("userError").innerHTML = "username is Empty";
           flag = 0;
     }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "username name require min 3 char";
        flag =0;
     }else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
     }
     if(password.value == ""){
        document.getElementById("passwordError").innerHTML = "password is empty";
        flag = 0;
     }else{
        document.getElementById("passwordError").innerHTML = "";
        flag = 1;
     }
     if(flag){
             alert("Successfully Login")
     }else{
        return false;
     }
     
   }
   
