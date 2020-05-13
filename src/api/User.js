import {wrappedFetch} from "../services/FetchWrapper";

export const postUser = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`/users`, f, callback, onError)
}
