import { GET_POKEMONS, BACK_PAGE, NEXT_PAGE, ORDER_POKEMONS, FILTER_POKEMONS, BY_BASE_LOCAL, GET_POKEMON_id, GET_POKEMON_NAME, POST_POKEMON, DELETE_POKEMON, GET_TYPES, POST_TYPES } from "./actionsType";
const initialState = {
    aPokemon: [],
    pokemons: [],
    pokemonsFyO: [],
    types: [],
    page: 1,
    location: "todos"
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                pokemonsFyO: payload
            };

        case NEXT_PAGE:
            return { ...state, page: state.page + 1 };
        case BACK_PAGE:
            return { ...state, page: state.page - 1 };



        case BY_BASE_LOCAL:
            if (payload === "base") {
                return {
                    ...state,
                    location: payload,
                    pokemonsFyO: state.pokemons.filter(poke => poke.id.length > 15)
                };
            }
            if (payload === "api") {

                const filtId = state.pokemons.filter(poke => poke.id < 500);
                return {
                    ...state,
                    location: payload,
                    pokemonsFyO: [...filtId]
                };
            } if (payload === "todos") {
                return {
                    ...state,
                    location: payload,
                    pokemonsFyO: [...state.pokemons]
                }
            }

        case ORDER_POKEMONS:
            const orderPokemons = [...state.pokemonsFyO];
            let ordened = []

            if (payload === "Asc") {
                ordened = orderPokemons.sort((a, b) => a.ataque - b.ataque)
            }
            if (payload === "Des") {
                ordened = orderPokemons.sort((a, b) => b.ataque - a.ataque)
            }
            if (payload === "a-z") {
                ordened = orderPokemons.sort((a, b) => {
                    const noa = a.nombre.toLowerCase();
                    const noe = b.nombre.toLowerCase();

                    if (noa < noe) {
                        return -1;
                    }
                    if (noa > noe) {
                        return 1;
                    }
                    return 0;
                })
            }
            if (payload === "z-a") {
                ordened = orderPokemons.sort((a, b) => {
                    const noa = a.nombre.toLowerCase();
                    const noe = b.nombre.toLowerCase();

                    if (noa < noe) {
                        return 1;
                    }
                    if (noa > noe) {
                        return -1;
                    }
                    return 0;
                })
            }
            if (payload === "todos") {
                return {
                    ...state,
                    pokemonsFyO: [...state.pokemons]
                }
            }

            return {
                ...state,
                pokemonsFyO: ordened

            };


        case FILTER_POKEMONS:
            let pokefiltred = [];


            if (payload === "todos") {
                pokefiltred = [...state.pokemons]
            }
            if (state.location === "todos") {

            }
            if (state.location === "api") {
                pokefiltred = state.pokemons.filter(poke => {

                    if (poke.id < 1300) {
                        let veri = poke.types;
                        if (veri.includes(payload)) return poke;

                    }
                })
            }
            if (state.location === "base") {
                pokefiltred = state.pokemons.filter(poke => {

                    if (poke.id.length > 20) {
                        let arr = poke.types.map(tip => tip.name)

                        if (arr.includes(payload)) return poke;
                    }
                })
            }
            if (state.location === "todos") {
                pokefiltred = state.pokemons.filter(poke => {

                    if (poke.id < 1300) {
                        let veri = poke.types;
                        if (veri.includes(payload)) return poke;

                    } else {
                        let arr = poke.types.map(tip => tip.name)

                        if (arr.includes(payload)) return poke;
                    }
                })
            }
            return {
                ...state,
                pokemonsFyO: pokefiltred

            };

        case GET_POKEMON_id:
            if (payload.length > 20) {
                return {
                    ...state,
                    aPokemon: state.pokemons.filter(poke => poke.id === payload)
                };
            }
            return {
                ...state,
                aPokemon: state.pokemons.filter(poke => poke.id === +payload)

            }
        case GET_POKEMON_NAME:
            return {
                ...state,
                aPokemon: payload
            };

        case POST_POKEMON:
            return {
                ...state,
            };
        case DELETE_POKEMON:
            return {
                ...state,
            };

        case GET_TYPES:
            return {
                ...state,
                types: payload
            };

        case POST_TYPES:
            return {
                ...state,
            };
            
        default:
            return { ...state };

    }
};

export default rootReducer;

// GET_TYPES