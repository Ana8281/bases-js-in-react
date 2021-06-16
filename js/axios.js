const url1 = 'https://jsonplaceholder.typicode.com/users/3'


axios.get(url1)
    .then(({ data }) => console.log(data)) 