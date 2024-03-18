const form = document.querySelector('#form-inscription');

form.addEventListener('click', function (e) {
    // Previent le comportement par défaut du formulaire
    e.preventDefault();

    // On supprime les messages d'erreur
    removeErrorMessages();

    // On verifie si les inputs sont valides
    // Si c'est le cas, on soumet le formulaire
    if (checkValidity()) {
        // On soumet le formulaire
        form.submit();
    }
});

// Fonction pour supprimer les messages d'erreur
function removeErrorMessages() {
    const messageError = document.querySelectorAll('.message-error');
    messageError.forEach((message) => {
        message.remove();
    });
}

// Fonction pour afficher un message d'erreur
// Puis ce qu'on fait plusieurs fois, on crée une fonction pour le faire une seule fois
function displayErrorMessage(input, message) {
    const messageError = document.createElement('p');
    messageError.textContent = message;
    messageError.classList.add('message-error');
    input.parentElement.append(messageError);
}

// Fonction pour vérifier la validité des inputs
function checkValidity() {
    // On récupère les inputs
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const pswdInput = document.querySelector('#pswd');
    const confirmPswdInput = document.querySelector('#confirm-pswd');

    // On part du principe que le formulaire est valide
    let isValide = true;

    // Check if inputs are empty
    if (nameInput.value == '') {
        displayErrorMessage(nameInput, 'Veuillez indiquer votre nom et prénom');
        // Si un champ est vide, le formulaire n'est pas valide
        // On change la valeur de isValide à false
        isValide = false;
    } else if (emailInput.value == '') {
        displayErrorMessage(
            emailInput,
            'Veuillez indiquer votre adresse email'
        );
        isValide = false;
    } else if (pswdInput.value == '') {
        displayErrorMessage(pswdInput, 'Veuillez choisir un mot de passe');
        isValide = false;
    } else if (confirmPswdInput.value == '') {
        displayErrorMessage(
            confirmPswdInput,
            'Veuillez confirmer votre mot de passe'
        );
        isValide = false;
    } else if (pswdInput.value != confirmPswdInput.value) {
        displayErrorMessage(
            confirmPswdInput,
            'Les mots de passe ne correspondent pas'
        );
        isValide = false;
    }
    // On retourne la valeur de isValide
    // Si isValide est true, le formulaire est valide
    // Si isValide est rentré dans une des conditions, le formulaire n'est pas valide
    // Et isValide est false
    return isValide;
}
