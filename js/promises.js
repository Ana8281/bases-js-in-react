const sumP = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject('This is not valid')
        } else {
            resolve(a + b)
        }
    })
}


sumP(2,-4)
    .then(result => console.log(result))
    .catch(error => console.log(error))

