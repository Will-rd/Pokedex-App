
var pokemonInputBox = document.getElementById('pokemon-finder');

var pokemonButton = document.getElementById('search-btn');
var pokemonBox = document.getElementById('pokemon-box');



pokemonButton.addEventListener('click', function (event) {
    event.preventDefault();
    // console.log(pokemonInputBox.value);
    var userChoice = pokemonInputBox.value.toLowerCase();
    fetch("https://pokeapi.co/api/v2/pokemon/" + userChoice)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.abilities);
            var cardEl = document.createElement('div');
            cardEl.textContent = data.name;
            pokemonBox.appendChild(cardEl);
        })
    console.log('hi');
})