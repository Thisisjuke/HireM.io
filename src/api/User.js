import {wrappedFetch} from "../services/FetchWrapper";

export const createUser = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`/users`, f, callback, onError)
}

export const logUser = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`https://5ebbff84f2cfeb001697d4e3.mockapi.io/user`, f, callback, onError)
  //return wrappedFetch(`/login`, f, callback, onError)
}

export const getUserInfo = (callback, onError = () => {}) => {
  return wrappedFetch(`https://5ebbff84f2cfeb001697d4e3.mockapi.io/user`, {}, callback, onError)
  //return wrappedFetch(`/user/me`, {}, callback, onError)
}
