const username = document.getElementById("username");
const password = document.getElementById("password");

username.onfocus = function(){
    focusInput(username);
    username.classList.remove("account-bg");
    username.setAttribute("placeholder", "Username");
}
username.onblur = function(){
    blurInput(username);
    username.removeAttribute("placeholder");
    if(username.value == ""){
        username.classList.add("account-bg")
    }
}
password.onblur = function(){
    blurInput(password);
    password.removeAttribute("placeholder");
    if(password.value == ""){
        password.classList.add("lock-bg")
    }
}
password.onfocus = function(){
    focusInput(password);
    password.classList.remove("lock-bg");
    password.setAttribute("placeholder", "Password");
}

function blurInput(node){
    if(node.value == ""){
        node.classList.remove('focus-input');
    }
}
function focusInput(node){
    node.classList.add("focus-input")
}