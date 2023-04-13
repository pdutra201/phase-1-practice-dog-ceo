console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
document.addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => data.message.forEach(img => renderImg(img)))
    
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        Object.keys(data.message).forEach(breed => renderBreeds(breed)),
        breeds = Object.keys(data.message)
        document.querySelector("#breed-dropdown").addEventListener("change", function(e){
            filterBreeds(breeds, e.target.value)
        })
        })
       

    })
     
    
function renderImg(img){   
    let dogo = document.createElement('p')
    dogo.className = "doge"
    dogo.innerHTML = `
    <img src="${img}">`
    document.querySelector("#dog-image-container").appendChild(dogo)

}

function renderBreeds(data){
    let type = document.createElement("li")
    type.className = "breed"
    type.textContent = data
    type.addEventListener("click", (e) =>{
        e.target.style.color = 'orange'
    })
    document.querySelector("#dog-breeds").appendChild(type)
}

function filterBreeds(breeds, letter){
    let list = document.querySelector("ul")
    list.innerHTML = ""
    let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
    filteredBreeds.forEach(breed => renderBreeds(breed))
}

