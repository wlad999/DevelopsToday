export const getAllPosts = state => {
  return state.postsPage.posts;
};
export const getCurrentPage = state => {
  return state.postsPage.currentPage;
};
export const getDataPost = state => {
  return state.postsPage.dataPost;
};
export const getComments = state => {
  return state.postsPage.comments;
};
