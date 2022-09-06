const URL = 'https://pizzeriawebapi.herokuapp.com/api/'

export const getItems = [
  fetch(`${URL}pizza`).then(res => res.json()),
  fetch(`${URL}empanada`).then(res => res.json()),
  fetch(`${URL}postre`).then(res => res.json()),
  fetch(`${URL}bebida`).then(res => res.json())
]

