const hi = () => {
    document.write("<li>hallo welt</li>")
}

const bye = () => document.write("<li>bye!!!!!</li>")

document.write("<ol>")

setInterval(bye(), 2000) // in this way it just execute once

//setInterval(hi, 2000) // in this way it executed each 2 secongs because the interval manage hi like its like

// setInterval(() => {
//     hi()
// }, 2000) 


document.write("</ol>")


