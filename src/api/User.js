import jwt_decode from "jwt-decode";
import {wrappedFetch} from "../services/FetchWrapper";
import {getUserToken} from "../services/Auth";

export const createUser = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`https://5ebbff84f2cfeb001697d4e3.mockapi.io/user-register`, f, callback, onError)
}

export const logUser = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`https://5ebbff84f2cfeb001697d4e3.mockapi.io/user`, f, callback, onError)
  //return wrappedFetch(`/login`, f, callback, onError)
}

export const getUserInfo = (callback, onError = () => {}) => {
  getUserToken()
    .then(token => {
      const decoded = jwt_decode(token)

      return wrappedFetch(`https://5ebbff84f2cfeb001697d4e3.mockapi.io/user`, {}, callback, onError)
      //return wrappedFetch(`/user/${decoded.id}`, {}, callback, onError)
    })
}
