//todo Creates a ul in html
//todo Accesses the whole div parent
//todo Listens to the div
//todo Targets the clicked element
//todo Changes its font size to 28px

const narutoList = document.querySelector("#naruto-list");
console.log(narutoList);

narutoList.addEventListener("click", function (e) {
    console.log(e.target.style.fontSize);
  if (e.target.style.fontSize == '' || e.target.style.fontSize == "16px") {
    e.target.style.fontSize = "28px";
  } else if (e.target.style.fontSize == "28px") {
    e.target.style.fontSize = "38px";
    e.target.style.color = "red";
  } else {
    e.target.style.fontSize = "16px";
    e.target.style.color = "black";
  }
});


// narutoList.addEventListener("dblclick", function (e) {
//   e.target.style.fontSize = "16px";
// });
// narutoList.addEventListener('click', function(e){
//     e.target.style.fontSize = '16px'
// })

const narutoH1 = document.querySelector('#naruto-h1')
narutoH1.addEventListener('dblclick', (event) => {
    event.target.style.transform.scale = '2'
})