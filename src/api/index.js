const URL = "https://jsonplaceholder.typicode.com/albums"

export default () => {
  return fetch(URL)
    .then(response => Promise.all([response, response.json()]))
}