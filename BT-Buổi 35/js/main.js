import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_API } = config;

const render = (posts) => {
  const container = document.querySelector(".container");

  posts.forEach(
    ({ id, title, name, img_author, img_content, text, category }) => {
      const section = document.createElement("section");
      container.append(section);

      const h2 = document.createElement("h2");
      h2.innerText = title;
      section.append(h2);

      const author = document.createElement("div");
      author.classList.add("author");
      section.append(author);

      const imgAuthor = document.createElement("img");
      imgAuthor.classList.add("img-author");
      author.append(imgAuthor);
      imgAuthor.src = img_author;

      const nameAuthor = document.createElement("p");
      nameAuthor.classList.add("name-author");
      author.append(nameAuthor);
      nameAuthor.innerText = name;

      const imgContent = document.createElement("img");
      imgContent.classList.add("img-author");
      section.append(imgContent);
      imgContent.src = img_content;

      const content = document.createElement("div");
      content.classList.add("content");
      content.innerText = text;
      section.append(content);

      const span = document.createElement("span");
      span.innerText = category;
      section.append(span);

      const hr = document.createElement("hr");
      section.append(hr);
    }
  );
};

const getPosts = async function () {
  const { response, data } = await client.get(`${SERVER_API}/content`);
  console.log(data);
  render(data);
};

getPosts();
