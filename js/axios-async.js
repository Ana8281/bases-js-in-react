const request2 = async() => {
    const { data }  = await axios.get('https://jsonplaceholder.typicode.com/users/2')
    return data;
}

const data = request2().then(console.log)