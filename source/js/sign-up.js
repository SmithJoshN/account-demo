const formElements = ['first-name', 'last-name', 'username', 'password', 'match-password']
const formValues = [];
var isError = false;
const formInvalid = document.getElementById('formInvalid');
const formSubmitBtn = document.getElementById('submit');
const users = [];

document.addEventListener('DOMContentLoaded', function(){
    if(localStorage.getItem('users') != null){
    users.push(localStorage.getItem('users'));
    }
    console.log(users);
})


formSubmitBtn.onclick = function() {
    signupSubmission();
};

function signupSubmission(){
    console.log(isError)

    if(isError){
        formInvalid.innerHTML = "The form is invalid. Please fill out each accordingly."
    }else{
        // Store each elements value into array
        formElements.forEach(formElement => {
            let input = document.getElementById(formElement);
            formValues.push(input.value);
        });
        let userDetails = {'name': formValues[0] + " " + formValues[1], 'password': formValues[3]}
        var key = formValues[2];
        var obj = {};
        obj[key] = userDetails;
        users.push(obj);
        localStorage.setItem('users', JSON.stringify(users));
    }
}
const usernameInput = document.getElementById(formElements[2]);
const userExists = document.getElementById('exists');
const notMatch = document.getElementById('notMatch');
usernameInput.onblur = function() {
    let users = JSON.parse(localStorage.getItem("users"));
    if(users != null){
        for (var i = 0, len = users.length; i < len; i++) {
            if(users[i][usernameInput.value] != null){
                userExists.innerHTML = "<span style='color: red'>Username already Exists.</span>"
                isError = true;
            }else{
                isError = false;
            }
        }
    }
}

const passwordMatch = document.getElementById(formElements[4]);
const password = document.getElementById(formElements[3]);
password.onblur = function() {
    if(passwordMatch.value != ""){
        if(passwordMatch.value != document.getElementById(formElements[3]).value){
            notMatch.innerHTML = "The passwords do not match."
            isError = true;
        }else{
            notMatch.innerHTML = "";
            isError = false;
        }
    }
}
passwordMatch.onblur = function() {
    if(passwordMatch.value != document.getElementById(formElements[3]).value){
        notMatch.innerHTML = "The passwords do not match."
        isError = true;
    }else{
        notMatch.innerHTML = "";
        isError = false;
    }
}

// users -
//          <username> -
//                          account info