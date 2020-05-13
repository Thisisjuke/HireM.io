const HEADERS_DEFAULT = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const BACKEND_URL = "http://localhost:3000"

export const postUser = (data, callback, onError = () => {}) => {
  const f = { method: "POST", body: data }

  return wrappedFetch(`${BACKEND_URL}/users`, f, callback, onError)
}

const wrappedFetch = (url, f, c = () => {}, e = () => {}) => {
  f.headers = HEADERS_DEFAULT
  f.body = JSON.stringify(f.body)

  fetch(`${BACKEND_URL}/users`, f)
    .then(response => response.json())
    .then(res => c(res))
    .catch(err => {
      e()
      console.log(err)
    })
}
