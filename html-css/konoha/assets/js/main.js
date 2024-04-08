//todo
//todo when i click on the konoha logo

// * First Method: if a condition
// const burgerIcon = document.getElementById("burger-icon");

// burgerIcon.addEventListener("click", () => {
//     const navigation = document.getElementById("navigation");
    
//     if (navigation.classList.contains("active")) {
//         navigation.classList.remove("active");
//     } else {
//         navigation.classList.add("active");
//     }
// });

// * Second Method: with the toggle method:

const burgerIcon = document.getElementById('burger-icon');
burgerIcon.addEventListener('click', () => {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('active')
})