const baseUrl = "https://simple-blog-api.crew.red/";

export const url = {
  posts: () => `${baseUrl}posts`,
  selectedComents: id => `${baseUrl}posts/${id}?_embed=comments`,
  setComents: () => `${baseUrl}comments`,
  delComents: id => `${baseUrl}comments/${id}`,
  setPosts: () => `${baseUrl}posts`,
  delPosts: id => `${baseUrl}posts/${id}`,
  updatePost: id => `${baseUrl}posts/${id}`
};
