console.log(654654);
const submitButton = document.querySelector('#submit-button')
console.log(submitButton);

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const nameInput = document.querySelector('#name');
    console.log(nameInput.parentElement);
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password')

    if (nameInput.value == '') {
        

    }
})