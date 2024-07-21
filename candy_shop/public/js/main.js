document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const flashMessages = document.getElementById('flash-messages');
        if (flashMessages) {
            flashMessages.style.transition = 'opacity 0.5s ease-out';
            flashMessages.style.opacity = '0';
            setTimeout(() => { flashMessages.remove(); }, 500); // Remove after transition
        }
    }, 5000); // Change to the duration you prefer
});