import * as types from "./actionTypes";
import * as bookmarkApi from "../../api/bookmarkApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadBookmarkSuccess(bookmarks) {
  return { type: types.LOAD_BOOKMARKS_SUCCESS, bookmarks };
}

export function createBookmarkSuccess(bookmark) {
  return { type: types.CREATE_BOOKMARK_SUCCESS, bookmark };
}

export function updateBookmarkSuccess(bookmark) {
  return { type: types.UPDATE_BOOKMARK_SUCCESS, bookmark };
}

export function deleteBookmarkOptimistic(bookmark) {
  return { type: types.DELETE_BOOKMARK_OPTIMISTIC, bookmark };
}

export function loadBookmarks() {
  return function (dispatch) {
    return bookmarkApi
      .getBookmarks()
      .then(bookmarks => {
        dispatch(loadBookmarkSuccess(bookmarks));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveBookmark(bookmark) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return bookmarkApi
      .saveBookmark(bookmark)
      .then(savedBookmark => {
        bookmark.id
          ? dispatch(updateBookmarkSuccess(savedBookmark))
          : dispatch(createBookmarkSuccess(savedBookmark));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteBookmark(bookmark) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteBookmarkOptimistic(bookmark));
    return bookmarkApi.deleteBookmark(bookmark.id);
  };
}
