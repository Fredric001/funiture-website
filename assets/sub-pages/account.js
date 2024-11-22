// toogle login / create form
let loginForm=document.getElementById("my-form")
let createForm=document.getElementById("create-form")
let logBtn=document.getElementById("log-Btn")
let createBtn=document.getElementById("create-Btn")

createBtn.addEventListener("click",function(){
    loginForm.style.display="none";
    if(loginForm.style.display==="none"){
     createForm.style.display="flex";
     

    }
 })

