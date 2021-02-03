// To start, you'll need to select the button element with javascript and save it to a variable. Refer to the Intro to the DOM lesson for many examples of this.
const jokeBtn = document.getElementById('jokeBtn')
let container = document.getElementById('jk-container')
console.log(jokeBtn)

// Next, add an event listener to the button variable that will fire a function when the button is clicked. Hint: as a first test, just log a message to yourself when the user clicks the button and don't worry about the API stuff just yet. Baby steps!

// Now we're ready to add fetch in to the mix. Using fetch and the URL provided above, make a request to the Chuck Norris API and handle the response. Hint: In the body of the first .then() callback function, you'll need to parse the response from the API first. If you don't remember this step from the lesson, review it or do a quick search for "parse JSON response with fetch" or something along those lines.
const randomUrl = 'https://api.chucknorris.io/jokes/random'
fetch(randomUrl)
.then((responseData) => {
    return responseData.json()
})
// Once you've parsed the JSON response you'll need to add a second .then() method to the fetch chain. This is where we can use the data from the API and do a little DOM manipulation to show the user a random joke. Think back to what you know about DOM manipulation and start small. You can do this!
.then((jsonData) => {
    console.log(jsonData.value)
    jokeBtn.addEventListener('click', function(e) {
        e.preventDefault()
        // console.log(`working`)
        container.innerText = jsonData.value
        // container.innerText = chuckJokes
    })
})
.catch((error) => {
    console.error('There has been an error', error)
})
const addJoke = joke => {
    let p = document.createElement('p')
    p.textContent = joke.value
}

let clrBtn = document.getElementById('clear')
clrBtn.addEventListener('click', function(e){
    e.preventDefault()
    container.innerText = ''
})

// New Fetch for Bonus functionality
const categoryUrl = 'https://api.chucknorris.io/jokes/categories'
fetch(categoryUrl)
.then((responseData) => {
    return responseData.json()
})
.then((jsonData) => {
    console.log(jsonData.value)
})
.catch((error) => {
    console.error(`there has been an error, ${error}`)
})


for (category in jokeCategories){

}