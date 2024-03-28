import { Card } from "./src/UI.js";
import { Pokemon } from "./src/pokemon.js";

const URL = "pokemons.json"

let pokemonInstances = []

const loadCard = () => {
    fetch(URL)
        .then(response => {
            // RESPUESTA CONVERTIDA A FORMATO JSON
            return response.json()
        })
        .then(data => {
            // INSTANCIA DE DATOS A OBJETOS CLASE POKEMON y UI
            pokemonInstances = data.map(pokemon => new Pokemon(pokemon.ThumbnailImage, pokemon.id, pokemon.name, pokemon.type, pokemon.weight, pokemon.abilities, pokemon.weakness))
            const ui = new Card()
            pokemonInstances.map(pokemon => ui.createCard(pokemon));

            // BUSQUEDA DE DATOS POR NOMBRE
            // DOM ELEMENTS
            const Input = document.getElementById("input-form");
            const form = document.getElementById("form");

            form.addEventListener("submit", (event) => {
                event.preventDefault()
                const searchedValue = Input.value.toLowerCase()
                if (searchedValue.trim === "") {
                    ui.clearCards()
                    pokemonInstances.map(pokemon => ui.createCard(pokemon))
                } else {
                    const results = pokemonInstances.filter(pokemon => pokemon.name.toLowerCase().includes(searchedValue))
                    ui.clearCards();
                    results.forEach(pokemon => ui.createCard(pokemon));
                }
            })
        })
}

document.addEventListener("DOMContentLoaded",
    loadCard()
)