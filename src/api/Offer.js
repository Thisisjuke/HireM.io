import { wrappedFetch } from "../services/FetchWrapper";

export const getOfferInfo = (id, callback, onError = () => {}) => {
  return wrappedFetch(`https://5ebbff84f2cfeb001697d4e3.mockapi.io/user-register`, {}, callback, onError)
}

export const createOffer = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`https://5ebbff84f2cfeb001697d4e3.mockapi.io/create-offer`, f, callback, onError)
}
