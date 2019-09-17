import { actionTypes } from "../action/constants";

let initialState = {
  posts: [],
  currentPage: 1,
  dataPost: {}
};

const potsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case actionTypes.DEL_POST:
      return {
        ...state,
        dataPost: action.dataPost
      };
    case actionTypes.SET_CARRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case actionTypes.SET_POST_DATA:
      return {
        ...state,
        dataPost: action.dataPost
      };

    default:
      return state;
  }
};

export default potsReducer;
