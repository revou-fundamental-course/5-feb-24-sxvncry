const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const cara = document.getElementById('cara')

// celsius to fahrenheit

let cTof = (v) => {
    return((v * (9/5) + 32))
}

let konversi = () =>{
    let cNew = cTof(celsius.value)
    fahrenheit.value = cNew
    cara.value = `${celsius.value} * (9/5) + 32 = ${cNew}`

}

// fahrenheit to celsius

let fToc = (v) => {
    return((v - 32) * (5/9))
}

let reverse = () => {
    let fNew = fToc(fahrenheit.value)
    celsius.value = fNew
    cara.value = `(${fahrenheit.value} - 32) * (5/9) = ${fNew} `

}

let reset = () =>{
    celsius.value = ''
    fahrenheit.value = ''
    cara.value = ''
}