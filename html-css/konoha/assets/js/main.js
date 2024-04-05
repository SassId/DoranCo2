//todo 
//todo when i click on the konoha logo

const logoLink = document.getElementById('logo-link');

logoLink.addEventListener('click', () => {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('active')
})