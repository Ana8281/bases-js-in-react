// REST Architecture

const url = 'https://jsonplaceholder.typicode.com/users/1'

fetch(url)
    .then(response => response)
    .then(result => result.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))