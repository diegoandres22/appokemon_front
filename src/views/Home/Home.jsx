import './Home.css';

import CardsCont from "../../components/CardsCont/CardsCont";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, filterPokemons, orderPokemons, getByOrigin, postTypes } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";


const Home = () => {

    const dispatch = useDispatch();


    const { types, pokemonsFyO } = useSelector(state => state);


    let cantPages = Math.floor(pokemonsFyO.length / 12);


    const handleOrder = (event) => {
        dispatch(orderPokemons(event.target.value));
    }

    const handleOFilter = (event) => {
        dispatch(filterPokemons(event.target.value));
    }
    const handleOrigin = (event) => {
        dispatch(getByOrigin(event.target.value));
    }

    useEffect(() => {
        
        // dispatch(postTypes())
        dispatch(getTypes())
        dispatch(getPokemons())

    }, []);


    return (
        <div className="homeCont">
            <div className="rabarra">
                <h1> POKEMONS </h1>
                <div className="filtAndOrd">
                    <p>Ver: </p>
                    <select className="listita" onChange={handleOrigin}>

                        <option className='toma' value="todos">Todos</option>
                        <option className='toma' value="base">Creados</option>
                        <option className='toma' value="api">Api</option>
                    </select>

                    <p>Ordenar por: </p>
                    <select className="listita" onChange={handleOrder}>
                        <option value="todos" >Todos</option>
                        <option className='toma' value="Asc">Ascendente</option>
                        <option className='toma' value="Des">Descendente</option>
                        <option className='toma' value="a-z">A-Z</option>
                        <option className='toma' value="z-a">Z-A</option>
                    </select>

                    <select className="listita" onChange={handleOFilter}>

                        <option value="todos">Todos</option>
                        {types?.map((tipe, id) => {
                            return (<option key={id} className='toma' value={tipe.name}>{tipe.name}</option>)

                        })
                        }

                    </select>
                </div>
            </div>
            <CardsCont />
            <div className="pagiCont">
                <Paginate cantPages={cantPages} />
            </div>

        </div>
    )
}

export default Home;