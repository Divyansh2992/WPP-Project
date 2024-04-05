let mail = document.getElementsByClassName('mail')[0]; // Accessing the first element with the class 'mail'
let pass = document.getElementsByClassName('pass')[0]; // Accessing the first element with the class 'pass'
let submit = document.getElementsByClassName('submit')[0]; // Accessing the first element with the class 'submit'

submit.addEventListener('click', () => {
    if (mail.value === 'admin' && pass.value === 'admin') {
        window.location = "index - Copy.html";
    }
});
