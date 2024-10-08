
const jokeEl = document.getElementById('appendJoke')
const btn = document.getElementById('btn')

generateJoke()


btn.addEventListener('click', generateJoke)
async function generateJoke(){
    const configg = {
        headers:{
            'Accept':'application/json'            
        }
    }
    const getData = await fetch('https://icanhazdadjoke.com', configg)
    const data = await getData.json()
    jokeEl.innerHTML = data.joke
}
