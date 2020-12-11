import { section } from "../markUp/section.js";
import { findBlogById } from "../helper/findBlogbyId.js";

export const aside = (links) => {
  const asideDiv = document.getElementById("aside-links");
  asideDiv.innerHTML = "";
  const heading = document.createElement("h1");
  heading.innerHTML = "Related Links";
  asideDiv.appendChild(heading);
  links.forEach((link) => {
    const p = document.createElement("p");
    p.id = "blog-" + link.id;
    p.classList.add("blog-link");
    p.innerHTML = link.title + "</br>";
    p.addEventListener("click", async (event) => {
      // section(findBlogById(event.target.id));
      let blog = await findBlogById(event.target.id);
      section(blog);
    });
    asideDiv.appendChild(p);
  });
};
