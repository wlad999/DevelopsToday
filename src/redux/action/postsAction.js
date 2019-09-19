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
export const addComentsAC = comments => ({
  type: actionTypes.ADD_COMMENT,
  comments: comments
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
      console.log("GET COMENTS", response);
      dispatch(setComentsAC(response.data));
      dispatch(addComentsAC(response.data.comments));
      // console.log("TEST", response);
    });
  };
};
export const setComentsThunk = data => {
  return dispatch => {
    putComentsRequest({ ...data }).then(response => {
      console.log("response", response.data.postId);
      getComentsRequest(response.data.postId).then(response => {
        console.log("SET COMRNTS", response.data);
        dispatch(addComentsAC(response.data.comments));
      });
    });
  };
};
