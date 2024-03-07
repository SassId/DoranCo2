/* ----------------------- EVENTS -----------------------*/

//* In JS, events allow us to interact with a user's action on the web page.
//* Such actions are called "inputs" and can be various like: clicks, doublecliks, scroll...

//! Most elements are already accessed in the 14-dom.js file

console.log(mainTitle);
mainTitle.addEventListener('click', function(){
    // Accesses the first h2 and make the font-size 50px
    const cssPropertiesH2 = document.querySelector('#css-properties');
    cssPropertiesH2.style.fontSize = '50px'

})

mainTitle.addEventListener('dblclick', function(){
    const cssPropertiesH2 = document.querySelector('#css-properties');
    cssPropertiesH2.style.fontSize = '100px'
})

mainTitle.addEventListener('mouseover', function(){
    const cssPropertiesH2 = document.querySelector('#css-properties');
    cssPropertiesH2.style.color = 'yellow'
})


