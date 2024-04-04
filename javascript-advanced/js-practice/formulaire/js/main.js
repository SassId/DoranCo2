const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const success = checkValidity()
    if (success) {
        setMessageSucces()
        // form.submit()
    } else {
        console.log('pas bon');
    }
})

function checkValidity() {
    const name            = document.querySelector('#name')
    const email           = document.querySelector('#email')
    const password        = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirm-password')
    removeMessageError()
    let success = false;
    if (!name.value) {
        setMessageError(name, 'Veuillez remplir le champ')
    } else if (!email.value) {
        setMessageError(email, 'Veuillez remplir le champ')
    } else if (isEmailValid(email.value) == false) {
        setMessageError(email, 'Email invalid')
    } else if (!password.value || !confirmPassword.value) {
        setMessageError(password, 'Veuillez remplir les champs mot de passe')
    } else if (password.value !== confirmPassword.value) {
        setMessageError(password, 'Les mots de passe ne correspondent pas')
    } else {
        success = true
    }
    return success
}

function setMessageError(element, errorMessage) {
    const span = document.createElement('span')
    span.innerText = errorMessage
    span.classList.add('error-message')
    element.parentElement.append(span)
}

function isEmailValid(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,6}\.[a-zA-Z]{2,4}$/.test(email)
}

function removeMessageError() {
    const messages = document.querySelectorAll('.error-message')
    messages.forEach((message) => {
        message.remove()
    })
}

function setMessageSucces() {
    const elemSuccess = document.createElement('div')
    elemSuccess.innerHTML = '<p>Votre formulaire a été envoyé</p>'
    elemSuccess.classList.add('message')
    form.append(elemSuccess)
}