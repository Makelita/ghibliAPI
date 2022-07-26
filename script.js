let option = document.querySelector("#filmselections")
let filmTitle = document.querySelector(".filmTitleDiv")
let filmDescrip = document.querySelector(".filmDescripDiv")
let filmDirector = document.querySelector(".director")
let filmProducer = document.querySelector(".producer")
let filmImg = document.querySelector(".leftImg")

let selectedFilm = ''

option.addEventListener("change", (e)=>{
    selectedFilm = e.target.value
    getFilms(selectedFilm)
})



const getFilms = async (film) => {
    const fetching = await fetch('https://ghibliapi.herokuapp.com/films')
    const response = await fetching.json()

    for( let item of response){
      if(item.title === film){
        filmTitle.textContent = item.title
        filmDescrip.textContent = item.description
        filmDirector.textContent = item.director
        filmProducer.textContent = item.producer
        filmImg.src = item.movie_banner
      }
    }

}

