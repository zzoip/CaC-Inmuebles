const email = document.getElementById('email');
const password = document.getElementById('password');
const errorEmail = document.getElementById('email-error');
const errorPassword = document.getElementById('password-error');
const form = document.getElementById('login-register-form');

form.addEventListener('submit', (e) => {
    errorEmail.innerText = "";
    errorPassword.innerText = "";

    if (email.value === '' || email.value == null) {
        e.preventDefault();
        errorEmail.innerText = "El correo electrónico es obligatorio";
    }
    if (password.value === '' || password.value == null) {
        e.preventDefault();
        errorPassword.innerText = "La contraseña es obligatoria";
    }
  
});

email.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (email.value === '' || email.value == null) {
            errorEmail.innerText = "El correo electrónico es obligatorio";
        }else{
            errorEmail.innerText = "";
        
        }
    }
});
password.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (password.value === '' || password.value == null) {
            errorPassword.innerText = "La contraseña es obligatoria";
        }else{
            errorPassword.innerText = "";
        }
    }
});

email.addEventListener('blur', ()=> {
    if (email.value === '' || email.value == null) {
        errorEmail.innerText = "El correo electrónico es obligatorio";
    }
    else{
        errorEmail.innerText = "";
    }
});
password.addEventListener('blur', ()=> {
    if (password.value === '' || password.value == null) {
        errorPassword.innerText = "La contraseña es obligatoria";
    }else{
        errorPassword.innerText = "";
    }
});