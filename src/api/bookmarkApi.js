import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/bookmarks/";

export function getBookmarks() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveBookmark(bookmark) {
  return fetch(baseUrl + (bookmark.id || ""), {
    method: bookmark.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(bookmark)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBookmark(bookmarkId) {
  return fetch(baseUrl + bookmarkId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
