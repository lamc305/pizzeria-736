const URL = 'https://pizzeriawebapi.herokuapp.com/api/products'

export function getProducts() {
  return fetch(URL)
    .then(res => res.json())
    .then(response => {
      const data = response
      return data
    })
}

