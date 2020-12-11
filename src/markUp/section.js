import { aside } from "./aside.js";

export const section = (blog) => {
  const blogDiv = document.getElementById("root");
  blogDiv.classList.add("blog");
  blogDiv.innerHTML = `
<div class="blog-image">
  <img src="${blog.imageUrl}" alt="${blog.title}">
</div>
<div class="blog-header">
  <h1>${blog.title}</h1>
  <span>${blog.author}</span>
</div>
<div class="blog-content">
  <p>${blog.content}</p>
</div>
  
  `;
  aside(blog.links);
};
