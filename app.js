let dataBtn = document.querySelector('button')
let results = document.getElementById('results')

const fetchFunc = () => {
fetch('https://api.chucknorris.io/jokes/random')
    .then((responseData) => {
        console.log(responseData)
        return responseData.json()
    })
    .then((jsonData) => {
        console.log(jsonData.value)
        results.innerText = jsonData.value
    }) 
}

dataBtn.addEventListener('click', fetchFunc)
