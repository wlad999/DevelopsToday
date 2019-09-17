import {
  getPostsRequest,
  getComentsRequest,
  putComentsRequest
} from "../../api/request";
let GET_POSTS = "GET_POSTS";
let DEL_POST = "DEL_POST";
let SET_CARRENT_PAGE = "SET_CARRENT_PAGE";
let SET_POST_DATA = "SET_POST_DATA";

let initialState = {
  posts: [],
  currentPage: 1,
  dataPost: {}
};

const potsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case DEL_POST:
      return {
        ...state,
        dataPost: action.dataPost
      };
    case SET_CARRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_POST_DATA:
      return {
        ...state,
        dataPost: action.dataPost
      };

    default:
      return state;
  }
};

export const getPostsAC = posts => ({
  type: GET_POSTS,
  posts
});

export const delPostAC = () => ({
  type: DEL_POST,
  dataPost: {}
});
export const setComentsAC = dataPost => ({
  type: SET_POST_DATA,
  dataPost
});

export const currentPageAC = currentPage => ({
  type: SET_CARRENT_PAGE,
  currentPage
});
export const getPostsThunk = () => {
  return dispatch => {
    getPostsRequest().then(response => {
      // console.log("POSTS", response);

      dispatch(getPostsAC(response.data));
    });
  };
};
export const getComentsThunk = id => {
  return dispatch => {
    getComentsRequest(id).then(response => {
      // console.log("response", response);
      dispatch(setComentsAC(response.data));
    });
  };
};
export const setComentsThunk = data => {
  return dispatch => {
    putComentsRequest({ ...data }).then(response => {
      console.log("response", response);
      // dispatch(setComentsAC(response.data));
    });
  };
};

export default potsReducer;
