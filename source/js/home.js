var FORM = FORM || {};
var users = [];

FORM.username = document.getElementById("username");
FORM.password = document.getElementById("password");
FORM.name = document.getElementById("name");
FORM.submit = document.getElementById("submit-btn");

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("users") != null){
        document.body.innerHTML = "Redirecting to the account page";
        window.location.replace("http://" + document.location.hostname + "/account.html")
    }
    else{
        alert("We see that you just arrived here! Please create an account to get started!")
    }
});

FORM.submit.onclick = function(){
    if(FORM.username == "" || FORM.password == "" || FORM.name == ""){
        // Return error
    }
    else{
        // Store into Local Storage.
        let obj = {}
        obj[FORM.username.value] = {'password': FORM.password.value, 'name': FORM.name.value}
        users.push(obj);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.replace("http://" + document.location.hostname + "/account.html");
    }
}
