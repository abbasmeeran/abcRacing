import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function bookmarkReducer(state = initialState.bookmarks, action) {
  switch (action.type) {
    case types.CREATE_BOOKMARK_SUCCESS:
      return [...state, { ...action.bookmark }];
    case types.UPDATE_BOOKMARK_SUCCESS:
      return state.map(bookmark =>
        bookmark.id === action.bookmark.id ? action.bookmark : bookmark
      );
    case types.LOAD_BOOKMARKS_SUCCESS:
      return action.bookmarks;
    case types.DELETE_BOOKMARK_OPTIMISTIC:
      return state.filter(bookmark => bookmark.id !== action.bookmark.id);
    default:
      return state;
  }
}
