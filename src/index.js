import './css/styles.css';
import fetchCountries from "./fetchCountries";
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
fetchCountries(['japan',"ukraine",'canada','usa','france', 'austria','sweden', 'norway', 'england','italy', 'spain', 'moldova','poland']);

const input = document.querySelector('#search-box');
const listCountries = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const cb = (event) => {
    
    const inputValue = input.value;
    console.log(inputValue);
    fetchCountries(inputValue).then(data => {
        console.log(data);
        createMarkup(data);
        
})
        .catch();
    
    // if (data.length > 10) {
    //         Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
    // }
};
// data => createMarkup(data.results)
function createMarkup(countries) {
    if (countries.length === null) {
        return;
    } else if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (countries.length > 2 && countries.length < 10) {
         const markup = countries
             .map((country) => {
                 console.log(country);
            return `<li class="list-item"><img src="${country.flags.svg}" width="50"> ${country.name.common}</li>`;
         })
        .join("");
        listCountries.innerHTML = markup;
    } else if (countries.length === 1) {
        const markup = countries
             .map((country) => {
                 console.log(country);
                 return `<span class="name"><img src="${country.flags.svg}" width="50"> ${country.name.common}</span>
                 <p>Capital: ${country.capital}</p>
                 <p>Population: ${country.population}</p>
                 <p>Languages: ${Object.values(country.languages)}</p>
            `;
         })
        .join("");
        countryInfo.innerHTML = markup;
    }
};

input.addEventListener('input', debounce(cb, DEBOUNCE_DELAY));