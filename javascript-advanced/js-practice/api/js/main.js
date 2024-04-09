//* ------------------------ AJAX ------------------------ */

/*
AJAX (Asynchronous JavaScript and XML is a dev technique allowing us to fetch data from a server without having to reload the page)
*/

/*
JSON (Javascript Object Notation) is a text data format that is easily readable and scriptable by humain
*/

// setTimeOut is an asynchronous function, it doesn't freeze the script before running
setTimeout(function () {
  console.log("yo");
}, 3000);

console.log("bro");

fetch("./js/data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const section = document.createElement("div");
    section.id = 'section'
    data.forEach((element) => {
        console.log(element);
        const {title, body} = element;
      const sectiontitle = document.createElement("h3");
      sectiontitle.textContent = title;
      const sectionContent = document.createElement('p');
      sectionContent.textContent = body
      const div = document.getElementById('section');
      div.append(sectiontitle, sectionContent)

    });
    document.body.append(div)
    
    // diplay in the page,  in a div a h2 with title and a p with the content and ;
  })
  .catch((error) => {
    console.log(error);
  });
