//timeout

const evaulate = () => {
    const note = prompt("what is your age")

    if (note < 18) {
        alert("you are less than 18")
        return;
    }

    alert("you are more than 19")
}

//setTimeout(evaulate(), 2000) it execute the function already

//setTimeout(evaulate, 2000) // it evaluate constant and then wait for 2000 to execute the function