import { FETCH_POSTS, NEW_POST, DELETE_POST, EDIT_POST } from "./types";
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const fetchPosts = () => (dispatch) => {
  fetch("http://localhost:3001/posts/", config)
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    });
};

export const createPost = (postData) => (dispatch) => {
  fetch("http://localhost:3001/posts/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log("in action ", post);
      dispatch({
        type: NEW_POST,
        payload: post,
      });
    });
};
export const deletePost = (id) => (dispatch) => {
  console.log(id);
  fetch("http://localhost:3001/posts/" + id, {
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
  console.log(post, id);
  fetch("http://localhost:3001/posts/" + id, {
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
