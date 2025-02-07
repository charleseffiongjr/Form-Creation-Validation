document.addEventListener('DOMContentLoaded', function () {


const form = document.getElementById('registration-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
});
const feedbackDiv = getElementById('form-feedback').style.display('block')
if (feedbackDiv){
    isvalid = true;
    feedbackDiv.textContent("Registration Succesfull")
}
const username = document.getElementById('username').Value.trim()
const email = document.getElementById('email').Value.trim()
const password = document.getElementById('password').value.trim()

let isValid = true;
const messages = []
if (username.value.length < 3) {
    isValid = false;
    return;
} else {
    messages.push("Username must be at lest 3 characters long")
}
if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    return;
} else {
    messages.push('Email must contain both "@" and "." characters')
}
if (password.value.length < 8) {
    isValid = false;
} else{
    messages.push("Password is too Short")
}

})