console.log('hello');
var pokemonInputBox = document.getElementById('pokemon-finder');
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    console.log(data.name);
    console.log(data.abilities);
})