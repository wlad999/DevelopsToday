import { getPostsRequest, getComentsRequest } from "../../api/request";
let GET_POSTS = "GET_POSTS";
let SET_POST = "SET_POST";
let SET_CARRENT_PAGE = "SET_CARRENT_PAGE";
let SET_COMENTS = "SET_COMENTS";

let initialState = {
  posts: [],
  currentPage: 1,
  selectedPost: {},
  coments: []
};

const potsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case SET_POST:
      return {
        ...state,
        selectedPost: action.post
      };
    case SET_CARRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_COMENTS:
      return {
        ...state,
        coments: action.coments
      };

    default:
      return state;
  }
};

export const getPostsAC = posts => ({
  type: GET_POSTS,
  posts
});
export const setSelectedPostAC = post => ({
  type: SET_POST,
  post
});
export const delPostAC = () => ({
  type: SET_POST,
  post: {}
});
export const setComentsAC = coments => ({
  type: SET_COMENTS,
  coments
});
export const delComentsAC = () => ({
  type: SET_COMENTS,
  coments: []
});
export const currentPageAC = currentPage => ({
  type: SET_CARRENT_PAGE,
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
      console.log("response", response);

      dispatch(setComentsAC(response.data.comments));
    });
  };
};

export default potsReducer;
