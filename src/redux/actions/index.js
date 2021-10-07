import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payLoad) => payLoad,
  getPostsFailure: (err) => err,
});

export const createPost = createActions({
  createPostRequest: (payload) => payload,
  createPostSuccess: (payLoad) => payLoad,
  createPostFailure: (err) => err,
});

export const updatePost = createActions({
  updatePostRequest: (payload) => payload,
  updatePostSuccess: (payLoad) => payLoad,
  updatePostFailure: (err) => err,
});

export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");
