console.log('Movies Catalog app');

let movieName = 'Last dance';
let favouritesMovies = [];
let lastId = 0;
let counter = 0;
updateCounter();

const adverts = [
    'Nowy film: Zielona Mila, w kinach od 22 września!',
    'Zapraszamy do kin już od 23 czerwca!',
    'Festiwal filmowy już od poniedziałku w kinie Burleska!',
    'Filmowy wieczór z kinem Adriatyk już dziś!',
    'Brakujące ogniwo to nowy film Scorsese, nie możesz go przegapić!'
];
let currentAdvert = adverts[0];
updateAdvertsUiElem();

startAdverts();

const favouriteInputElem = document.getElementById('favouriteInput');
favouriteInputElem.value = movieName;

const favouritesListElem = document.getElementById('favouritesList');

function onAddClicked() {
    const favouriteInputElem = document.getElementById('favouriteInput');

    //model
    movieName = favouriteInputElem.value;

    let movie = {
        id: lastId++,
        name: movieName
    }
    favouritesMovies.push(movie);

    //ui
    const fvElem = createFavouriteMovieUiElem(movie);
    favouritesListElem.appendChild(fvElem);
    updateCounter();
}

function updateCounter() {
    const favouritesCounterElem = document.getElementById('favouritesCounter');

    //model
    counter = favouritesMovies.length;

    //ui
    favouritesCounterElem.innerText = counter;
}

function createFavouriteMovieUiElem(movie) {
    const divElem = document.createElement('div');
    divElem.id = `movie-${movie.id}`;
    divElem.classList.add('mc-margin-10');
    const pElem = document.createElement('span');
    const btnElem = document.createElement('button');
    
    btnElem.id = `${movie.id}`;
    btnElem.innerText = 'Usuń';
    btnElem.style.setProperty('float', 'right');

    btnElem.addEventListener('click', onRemoveClicked);

    pElem.innerText = movie.name;
    divElem.appendChild(pElem);
    divElem.appendChild(btnElem);

    return divElem;
}

function onRemoveClicked(event) {
    const idToDelete = Number(event.target.id);

    //model
    favouritesMovies = favouritesMovies.filter(x => x.id !== idToDelete);

    //ui
    const uiElemToDel = document.getElementById(`movie-${idToDelete}`);
    favouritesListElem.removeChild(uiElemToDel);
    updateCounter();
}

function startAdverts() {
    setInterval(function() {
        const randomId = parseInt(Math.random() * 10 % adverts.length);

        //model
        currentAdvert = adverts[randomId];

        //ui
        updateAdvertsUiElem();
    }, 1500);
}

function updateAdvertsUiElem() {
    const advertsElem = document.getElementById('adverts');
    advertsElem.innerText = currentAdvert;
}

function onSearchClicked() {
    fetch('http://www.omdbapi.com/?apikey=7015f6d&t=last+dance').then(function(response) {
        return response.json();
    }).then(function(result) {
        console.log(result);
    })
}