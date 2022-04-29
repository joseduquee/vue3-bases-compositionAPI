import axios from "axios"
import { ref } from "vue"


const usePokemon = ( pokemonId = '1' ) => {

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchPokemon = async( id ) => {

        if(!id) return

        isLoading.value = true
        pokemon.value = null

        try {
            
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
            pokemon.value = data
            errorMessage.value = null

            console.log( data )

        } catch (error) {
            errorMessage.value = `No se puedo cargar ese pokemon`
        }

        isLoading.value = false

    }

    searchPokemon( pokemonId )

    return {
        pokemon,
        isLoading,
        errorMessage,

        searchPokemon
    }

}

export default usePokemon