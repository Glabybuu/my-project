const form = document.getElementById('Contactform')

const nameInput = document.getElementById('name')
const phoneInput = document.getElementById('phone')
const emailInput = document.getElementById('email')

emailInput.addEventListener('input', validateEmail)


function validateEmail() {
    const emailRegex = /[A-Za-z0-9\._]{3, 10} @ [a-z0-9]{2, 10}\.[a-z]{2-9}/;
    if(emailRegex.test(emailInput.value)) {
        hideError(emailInput);
        return true;
    } else {
        showError(emailInput, "email должен состоять из 3-10 символов, содержать знак @");
        return false;
    }
}


function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('error') || document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    formControl.appendChild(errorElement);
    input.style.borderColor = 'red';

}

function hideError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');
    if(errorElement) {
        formControl.removeChild(errorElement);
    }
    input.style.borderColor = 'purple'
}

form.addEventListener('submit', function(a){
    a.preventDefault();
    
    const isEmailValid = validateEmail();
    if(isEmailValid){
        form.submit();
    }
})
