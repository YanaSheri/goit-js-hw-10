export default function fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/v3.1/';
    return fetch(`${BASE_URL}name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            } 
            return response.json();
        })
};

// export default { fetchCountries };
// const BASE_URL = 'https://restcountries.com/v3.1/name/';
// function fetchCountries(name) {
//     return fetch(`${BASE_URL}japan`)
//         .then(console.log)
// }

// export default function fetchMovies(query) {
//     const KEY = '8a7432db37f5ff14bd102ef897a46bd5';
//     const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
//     return fetch(`${BASE_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
//     .then(response => response.json())
// };
