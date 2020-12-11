export const header = () => {
  const headerTag = document.getElementById("header");
  headerTag.innerHTML = `
<div class="navigation">
  <div class="logo">
    <h2>Blog Rendring</h2>
  </div>
  <div class="nav-bar">
    <div class="hamburger-div" style="margin-left: 80%">
      <div class="hamburger">
        <div class="hamburger-lines line1"></div>
        <div class="hamburger-lines line2"></div>
        <div class="hamburger-lines line3"></div>
      </div>
    </div>
  </div>
  <ul>
    <li class="nav-items">
    <a href="https://adityarawengg.github.io/structuredHTML/" class="nav-links">
          Home
    </a>
      </li>
    </ul>
</div>
  
  `;
};
