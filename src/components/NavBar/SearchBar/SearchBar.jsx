import "./SearchBar.css"

import axios from 'axios';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../../redux/actions";

const SearchBar = () => {

    const dispatch = useDispatch();

    const [poke, setPoke] = useState("");

    const handleChange = (event) => {
        setPoke(event.target.value)
    }

    const handlePoke = async (poke) => {

        try {

            const response = await axios.get(`http://localhost:3001/pokemon/get/?nombre=${poke}`);

            if (response.data.id) {

                dispatch(getPokemonByName(poke))
            }

        } catch (error) {
            alert("No hay un pokemon con ese nombre")
        }
    }

    return (
        <div className='searcont'>

            <input className='searbar' onChange={handleChange} type='text' value={poke} placeholder='Buscar por nombre' />

            {poke.length > 0 && <Link className="searcontbut" to={`/detailbyname`}>
                <button className='searbut' onClick={() => { handlePoke(poke); setPoke('') }}  ></button>
            </Link>}


        </div>
    );
}

export default SearchBar;