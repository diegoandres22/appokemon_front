import axios from 'axios';

import { GET_POKEMONS, NEXT_PAGE, BACK_PAGE, ORDER_POKEMONS, FILTER_POKEMONS, BY_BASE_LOCAL, GET_POKEMON_id, GET_POKEMON_NAME, GET_TYPES, DELETE_STATE } from './actionsType';


export const getPokemons = () => {
    return async (dispatch) => {
        const databdd = await axios.get("/pokemon/get");
        const pokemonsb = databdd.data;
        const dataapi = await axios.get("/pokemonapi/get/");
        const pokemonsa = dataapi.data;

        dispatch({ type: GET_POKEMONS, payload: [...pokemonsb, ...pokemonsa] });
    };
};

export const nextPage = () => {
    return async (dispatch) => {

        dispatch({ type: NEXT_PAGE });
    };
};
export const backPage = () => {
    return async (dispatch) => {

        dispatch({ type: BACK_PAGE });
    };
};

export const orderPokemons = (order) => {
    return { type: ORDER_POKEMONS, payload: order };
};

export const filterPokemons = (type) => {
    return async (dispatch) => {

        dispatch({ type: FILTER_POKEMONS, payload: type });
    };
};
export const getByOrigin = (origen) => {
    return { type: BY_BASE_LOCAL, payload: origen };
};

export const getPokemonById = (id) => {

    return async (dispatch) => {

        dispatch({ type: GET_POKEMON_id, payload: id });
    };
};
export const getPokemonByName = (name) => {


    return async (dispatch) => {
        const resp = await axios.get(`/pokemon/get/?nombre=${name}`);
        const pokemonByName = resp.data;
        dispatch({ type: GET_POKEMON_NAME, payload: pokemonByName });
    };
};
// export const deleteStateG = () => {

//     return  (dispatch) => {

//       return dispatch({ type: DELETE_STATE });
//     };
// };

export const postPokemon = (pokemon) => {
    return async () => {

        try {
            const post = await axios.post(`/pokemon/add`, pokemon);
            console.log(post);

            if (post.data.id) {
                alert("Pokemon creado exitosamente")
            }
            return post;

        } catch (error) {
            alert("No se creó el pokemon")
        }

    }
};


export const deletePokemon = (idPokemon) => {
    return async () => {
        const post = await axios.delete(`/pokemon/delete/${idPokemon}`);
        return post;
    };
};
export const getTypes = () => {
    return async (dispatch) => {
        const res = await axios.get(`/type/get`);
        const types = res.data;

        return dispatch({ type: GET_TYPES, payload: [...types] });
    };
};
export const postTypes = () => {
    return async () => {
        const types = await axios.get(`/type/bddadd`);

        return types;
    };
};


// 