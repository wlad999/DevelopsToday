import { createSelector } from "reselect";
export const getAllPosts = state => {
  return state.postsPage.posts;
};
// const getAllPostsSelector = state => {
//   return state.postsPage.posts;
// };
// export const getAllPosts = createSelector(getAllPostsSelector);

export const getCurrentPage = state => {
  return state.postsPage.currentPage;
};
export const getDataPost = state => {
  return state.postsPage.dataPost;
};
export const getComments = state => {
  return state.postsPage.comments;
};
export const getPostId = state => {
  return state.postsPage.dataPost.id;
};
