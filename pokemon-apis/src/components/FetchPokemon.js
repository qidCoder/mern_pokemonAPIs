import React, { useState} from 'react';

const FetchPokemon = (props) => {
    //destructure props and initialize to nothing
    const [state, setState] = useState([]);

    //function to process the button event of calling the API
    const getPokemon = () => {
        //fetch the API
        fetch(' https://pokeapi.co/api/v2/pokemon?limit=807')
            //if API returns successfully, first return the API data as JSON data
            .then(response => 
                response.json()
            )
            // also do this, send all of the JSON data to our state
            .then(response => {
                setState(
                    response.results
                )
            })

            //error case
            .catch(err => console.log(err))
    }

    return (
    <>
        <button type="submit" onClick={getPokemon}>Fetch Pokemon</button>

        {/* map and plot all names */}
        {
            state.map( (each_pokemon, i) => {
                return <ul><li key={i}>{each_pokemon.name}</li></ul>
            })
        }
    </>
);
}

export default FetchPokemon;