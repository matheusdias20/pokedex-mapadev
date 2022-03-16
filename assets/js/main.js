const listSelectionPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listSelectionPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cardPokemonOpen = document.querySelector('.open')
        cardPokemonOpen.classList.remove('open')

        const idPokemonSelected = pokemon.attributes.id.value

        const idCardPokemonToOpen = 'card-' + idPokemonSelected
        const cardPokemonToOpen = document.getElementById(idCardPokemonToOpen)
        cardPokemonToOpen.classList.add('open')

        const pokemonActiveAtListing = document.querySelector('.active')
        pokemonActiveAtListing.classList.remove('active')

        const pokemonSelectedAtListing = document.getElementById(idPokemonSelected)
        pokemonSelectedAtListing.classList.add('active')
    })
})