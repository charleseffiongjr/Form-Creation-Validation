document.addEventListener('DOMContentLoaded', function () {


const form = document.getElementById('registration-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
});
const feedbackDiv = getElementById('form-feedback')
const username = document.getElementById('username').Value.trim()
const email = document.getElementById('email').Value.trim()
const password = document.getElementById('password').value.trim()

const isValid = true;
const messages = []
if (username.value.length < 3) {
    isValid = false;
    return;
} else {
    messages.textContent = "Username is not long enough"
}
if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
    isValid = false;
    return;
} else {
    messages.textContent = "Invalid Email"
}
if (password.value.length < 8) {
    isValid = false;
} else{
    messages.textContent = "Password is too Short"
}
})