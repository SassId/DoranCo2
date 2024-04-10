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

  // diplay in the page,  in a div a h2 with title and a p with the content and ;
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    console.log(posts);
    // section.id = 'section'
    const fragment = document.createDocumentFragment();

    posts.forEach((post) => {
      const { title, body } = post;

      const section = document.createElement("div");

      const sectiontitle = document.createElement("h2");
      sectiontitle.textContent = title;

      const sectionContent = document.createElement("p");
      sectionContent.textContent = body;

      section.append(sectiontitle, sectionContent);

      fragment.append(section);
    });

    document.body.append(fragment);

  })
  .catch((error) => {
    console.log(error);
  });
