var login =document.querySelector(".btn-login");
var modal =document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

login.addEventListener("click",function(){
    modal.classList.add("show")
    
})

overlay.addEventListener("click",function(){
    modal.classList.remove("show")
})


// modal-button

var modal_switch = document.getElementsByClassName("modal-switch");
var modal_buttons = document.getElementsByClassName("modal-button");
var auth_login = document.querySelector(".auth-login");
var auth_register =document.querySelector(".auth-register")

for (var i = 0 ; i < modal_buttons.length; i++) {
    modal_buttons[i].addEventListener("click",function(){ 
        var result = document.getElementsByClassName("active");
        result[0].className = result[0].className.replace("active","");
        this.className += " active";
     if (auth_register.classList.contains("hiden")){
        auth_login.classList.add("hiden")
        auth_register.classList.remove("hiden")
     }else {
        auth_register.classList.add("hiden")
        auth_login.classList.remove("hiden")
     }
        })
}


// form input

auth_email = document.querySelector(".auth-email");
auth_password = document.querySelector(".auth-password");
error =document.querySelector(".error")

auth_email.addEventListener("click",function(){
    if (auth_email.value === "") {
        error.innerText = "Vùi lòng nhập dữ liệu";
    }
})




