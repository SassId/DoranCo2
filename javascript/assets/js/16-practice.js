//todo Creates a ul in html
//todo Accesses the whole div parent
//todo Listens to the div
//todo Targets the clicked element
//todo Changes its font size to 28px

const narutoList = document.querySelector('#naruto-list');
console.log(narutoList);

narutoList.addEventListener('click', function(e){
    e.target.style.fontSize = '28px'
})
