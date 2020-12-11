export const footer = () => {
  const footerTag = document.getElementById("footer");
  footerTag.innerHTML = `
        <div class="footer-content">
        <p class="footer-text inline">Thank You</p>
        <div class="footer-links">
          <a href="#">Feedback</a>
          |
          <a
            href="https://adityarawengg.github.io/My_Resume/improvedResume.html"
            >About developer</a
          >
        </div>
      </div>

  `;
};
