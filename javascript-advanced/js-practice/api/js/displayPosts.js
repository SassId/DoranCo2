export function displayPosts (array) {
    const fragment = document.createDocumentFragment();

    array.forEach((post) => {
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
  }