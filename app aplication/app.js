const nav = document.querySelector('.nav-links');
const navBar = document.querySelector('.navbar')
const burger = document.querySelector('.burger');
const navLinks =  document.querySelectorAll('.nav-links li')
// toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('active')

// animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else{
            link.style.animation = `navlinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
// burger animation
    burger.classList.toggle('toggle')
    
});



navBar.addEventListener('scroll', () => {
    navBar.classList
})


/////////////////////////////////////////


const api_url = ('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=53b88caee5a080ed8ead27be05ab62ed&api=1')
const img_path = ('https://image.tmdb.org/t/p/w500')
const main = document.querySelector('.main')
const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=53b88caee5a080ed8ead27be05ab62ed&query="'
const form = document.querySelector('.form')


const input = document.querySelector('.search')

getMovies(api_url)
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}


function showMovies(movies){
    main.innerHTML = ''
    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie
        const moveieEl = document.createElement('div')
        moveieEl.classList.add('movie')
        moveieEl.innerHTML=`
            <img src="${img_path + poster_path}" alt="">
            <div class="movie-info">
                <h3 class="title">${title}</h2>
                <span class="vote-avarage">${vote_average}</span>
            </div>
            <div class="overview>
                <p>${overview}</p>
            </div>
        `
        main.appendChild(moveieEl)
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = input.value
    if(searchTerm && searchTerm  !== ''){
        getMovies(search_url + searchTerm)
        input.value = ''
    } else{
        window.location.reload()
    }
})