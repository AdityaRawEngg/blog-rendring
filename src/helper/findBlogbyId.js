import { blogs } from "../data/data.js";

export const findBlogById = async (id) => {
  return blogs.then((blogList) => {
    return blogList.find((blog) => {
      return blog.id == id.split("-")[1];
    });
  });
};
