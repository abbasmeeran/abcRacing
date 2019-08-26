import { handleResponse } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/authenticate/";

export async function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(baseUrl, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

export function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
