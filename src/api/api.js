const baseUrl = "https://simple-blog-api.crew.red/";
// const baseUrl = "https://jsonplaceholder.typicode.com/";

export const url = {
  posts: () => `${baseUrl}posts`,
  selectedComents: id => `${baseUrl}posts/${id}?_embed=comments`
  // selectedComents: id => `${baseUrl}comments?postId=${id}`
};

// https://simple-blog-api.crew.red/posts/1?_embed=comments
