
const animalList = document.getElementById('animal-list');
console.log(animalList);
const firstDiv = document.getElementById('first-div')

animalList.addEventListener('click', (e) => {
    console.log(animalList);
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `I'm not scared of ${e.target.textContent}`;
    const firstDiv = document.getElementById('first-div');
    firstDiv.append(newParagraph)
})

const dropDown = document.getElementById('drop-down');
dropDown.addEventListener('change', (e) => {
    document.body.style.backgroundColor = e.target.value
})