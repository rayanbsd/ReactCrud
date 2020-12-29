import { FETCH_POSTS, NEW_POST, DELETE_POST, EDIT_POST } from "./types";
import { URL } from "./constants";
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const fetchPosts = () => (dispatch) => {
  fetch(`${URL}posts/`, config)
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    });
};

export const createPost = (postData) => (dispatch) => {
  fetch(`${URL}posts/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      dispatch({
        type: NEW_POST,
        payload: post,
      });
    });
};
export const deletePost = (id) => (dispatch) => {
  fetch(`${URL}posts/` + id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((post) => {
      dispatch({
        type: DELETE_POST,
        payload: post,
      });
    });
};
export const editPost = (post, id) => (dispatch) => {
  fetch(`${URL}posts/` + id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((post) => {
      dispatch({
        type: EDIT_POST,
        payload: post,
      });
    });
};
