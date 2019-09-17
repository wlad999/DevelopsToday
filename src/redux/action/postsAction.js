import {
  getPostsRequest,
  getComentsRequest,
  putComentsRequest
} from "../../api/request";
import { actionTypes } from "./constants";

export const getPostsAC = posts => ({
  type: actionTypes.GET_POSTS,
  posts
});

export const delPostAC = () => ({
  type: actionTypes.DEL_POST,
  dataPost: {}
});
export const setComentsAC = dataPost => ({
  type: actionTypes.SET_POST_DATA,
  dataPost
});

export const currentPageAC = currentPage => ({
  type: actionTypes.SET_CARRENT_PAGE,
  currentPage
});
export const getPostsThunk = () => {
  return dispatch => {
    getPostsRequest().then(response => {
      dispatch(getPostsAC(response.data));
    });
  };
};
export const getComentsThunk = id => {
  return dispatch => {
    getComentsRequest(id).then(response => {
      dispatch(setComentsAC(response.data));
      console.log("TEST", response);
    });
  };
};
export const setComentsThunk = data => {
  return dispatch => {
    putComentsRequest({ ...data }).then(response => {
      console.log("response", response.data.data.postId);
      // dispatch(setComentsAC(response.data));
      getComentsThunk(response.data.data.postI);
    });
  };
};
