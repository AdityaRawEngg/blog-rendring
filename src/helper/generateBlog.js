import { section } from "../markUp/section.js";
import { blogs } from "../data/data.js";
import { header } from "../markUp/header.js";
import { footer } from "../markUp/footer.js";

export const renderBlog = (id) => {
  blogs.then((blogList) => {
    header();
    section(blogList[0]);
    footer();
  });
};
