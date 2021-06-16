
// async convert all in promises
const hello = async () => {
    // return new Promise(resolve => {
    //     resolve("hello promise")
    // })// i can replace Promise using async because it return itslef a promise
    return "hello promise async"
}



hello()
    .then(result => console.log(result))


//////

const request = async () => {
    setTimeout(() => {
        const datos = {
            email: "Nathan@yesenia.net",
            id: 3,
            name: "Clementine Bauch"
        }
        console.log(datos)
    }, 1000 )
}

request().then(console.log )