import jwt_decode from "jwt-decode";
import {wrappedFetch} from "../services/FetchWrapper";
import {getUserToken} from "../services/Auth";

export const createUser = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`https://glacial-crag-23937.herokuapp.com/users`, f, callback, onError, false)
}

export const logUser = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`https://glacial-crag-23937.herokuapp.com/authentication_token`, f, callback, onError, false)
}

export const getUserInfo = (callback, onError = () => {}) => {
  getUserToken()
    .then(token => {
      const decoded = jwt_decode(token)

      return wrappedFetch(`https://glacial-crag-23937.herokuapp.com/users/${decoded["user_id"]}`, {}, callback, onError)
    })
}
