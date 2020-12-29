import { FETCH_POSTS, NEW_POST, DELETE_POST,EDIT_POST } from "../actions/types";

const initialState = {
  posts: [],
  post: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        post: action.payload,
        posts : [...state.posts , action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item._id !== action.payload),
      };
    case EDIT_POST:
      return{
        ...state,
        post:action.payload
      }
    default:
      return state;
  }
}
