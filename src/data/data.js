const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

export const blogs = (async () => {
  let response = await axios.get(url);
  return response.data;
})();
