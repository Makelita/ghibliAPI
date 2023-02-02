let option = document.querySelector("#filmselections")
let filmTitle = document.querySelector(".filmTitleDiv")
let filmDescrip = document.querySelector(".filmDescripDiv")
let filmDirector = document.querySelector(".director")
let filmProducer = document.querySelector(".producer")
let filmImg = document.querySelector(".leftImg")

let selectedFilm;

option.addEventListener("change", (e)=>{
    selectedFilm = e.target.value
    getFilms(selectedFilm)
})



const getFilms = async (film) => {
    const fetching = await fetch('https://raw.githubusercontent.com/janaipakos/ghibliapi/master/data.json')
    const response = await fetching.json()
    let data = response.films
    for( let item in data){
      if(data[item].title === film){
        filmTitle.textContent = data[item].title
        filmDescrip.textContent = data[item].description
        filmDirector.textContent = data[item].director
        filmProducer.textContent = data[item].producer
        filmImg.src = data[item].movie_banner
      }
    }

}

