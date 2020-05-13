import {getUserToken, signOut} from "./Auth";
import { FmLoginSessionExpired } from "./FlashMessages";

const HEADERS_DEFAULT = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const BACKEND_URL = "http://localhost:3000"

export const wrappedFetch = async (url, f, c = () => {}, e = () => {}) => {
  f.body = JSON.stringify(f.body)
  f.headers = HEADERS_DEFAULT
  f.headers['Authorization'] = await getUserToken()

  request(url, f)
    .then(res => c(res))
    .catch(err => {
      e()
      console.log(err)
    })
}

function parseJSON(response) {
  return new Promise((resolve) => response.json()
    .then((json) => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
}

function request(url, options) {
  return new Promise((resolve, reject) => {
    fetch(`${url}`, options)
      .then(parseJSON)
      .then((response) => {
        if (response.ok) {
          return resolve(response.json);
        }
        if (response.status === 401) {
          signOut()
          FmLoginSessionExpired()
        }

        return reject(response);
      })
      .catch((error) => {
        reject({networkError: error})
      });
  });
}
