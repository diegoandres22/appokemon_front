import "./Form.css"

import { Link } from "react-router-dom"
import { useState } from "react";
import Validation from './../../components/Validations/Validations'
import { useDispatch, useSelector } from "react-redux";

import { postPokemon, getPokemons, getTypes } from "../../redux/actions";

const Form = () => {

    const dispatch = useDispatch();

    const { types } = useSelector(state => state);

    const [errors, setErrors] = useState({})

    const [newPokemon, setNewPokemon] = useState({
        nombre: '',
        imagen: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        tipos: []

    });

    const handleChange = (event) => {

        setNewPokemon({
            ...newPokemon,
            [event.target.name]: event.target.value
        })
        setErrors(Validation({

            ...newPokemon,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {

        event.preventDefault();
        dispatch(postPokemon(newPokemon))
        dispatch(getPokemons())
        alert('Pokemon creado exitosamente')
        setNewPokemon({
            nombre: '',
            imagen: '',
            vida: '',
            ataque: '',
            defensa: '',
            velocidad: '',
            altura: '',
            peso: '',
            tipos: []
        })


    }
    const handleTypes = (event) => {
        setNewPokemon({
            ...newPokemon,
            tipos: [...newPokemon.tipos, event.target.value]
        });
    };


    return (
        <>
            <div className="detailCont" >

                <div className="atrascont">
                    <button className=' flechacont'>
                        <Link className='flecha' to='/home'> V </Link>
                    </button>
                    <h3>Créa un pokemon </h3>
                    <p>con las características que gustes </p>
                </div>

                <div className="imgtarget">
                    <label className={newPokemon.imagen} htmlFor="imagen">Url de imagen</label>
                    <input onChange={handleChange} value={newPokemon.imagen} type="text" name="imagen" />
                    <p>Preferiblemente escoge una imagen con fondo transparente</p>
                    {errors.imagen && <p className="error">{errors.imagen}</p>}

                </div>


                <form className="targetimg" onSubmit={handleSubmit}>

                    <div className="targetf">

                        <div className="formall">

                            <div className="nombrecont">
                                <label htmlFor="nombre">Nombre</label>
                                <input onChange={handleChange} type="text" name="nombre" value={newPokemon.nombre} /></div>
                            {errors.nombre && <p className="error">{errors.nombre}</p>}

                            <div className="vidacont">
                                <label htmlFor="vida">Vida</label>
                                <input onChange={handleChange} type="text" name="vida" value={newPokemon.vida} /></div>
                            {errors.vida && <p className="error">{errors.vida}</p>}

                            <div className="ataquecont">
                                <label htmlFor="ataque">Ataque</label>
                                <input onChange={handleChange} type="text" name="ataque" value={newPokemon.ataque} /></div>
                            {errors.ataque && <p className="error">{errors.ataque}</p>}

                            <div className="defensacont">
                                <label htmlFor="defensa">Defensa</label>
                                <input onChange={handleChange} type="text" name="defensa" value={newPokemon.defensa} /></div>
                            {errors.defensa && <p className="error">{errors.defensa}</p>}

                            <div className="velocidadcont">
                                <label htmlFor="velocidad">Velocidad</label>
                                <input onChange={handleChange} type="text" name="velocidad" value={newPokemon.velocidad} /></div>
                            {errors.velocidad && <p className="error">{errors.velocidad}</p>}



                        </div>

                        <div className="formtyps">

                            <div className="alturacont">
                                <label htmlFor="altura">Altura</label>
                                <input onChange={handleChange} type="text" name="altura" value={newPokemon.altura} /></div>
                            {errors.altura && <p className="error">{errors.altura}</p>}


                            <div className="pesocont">
                                <label htmlFor="peso">Peso</label>
                                <input onChange={handleChange} type="text" name="peso" value={newPokemon.peso} /></div>
                            {errors.peso && <p className="error">{errors.peso}</p>}

                            <div className="tiposform cont">
                                {types?.map(tipe => {
                                    return (
                                        < div className="tipo">
                                            <label htmlFor="tipos">{tipe.name}</label>
                                            <input name="tipos" type="checkbox" value={tipe.id} onChange={handleTypes} />
                                        </div>
                                    )
                                })}
                            </div>
                            {errors.tipos && <p className="error">{errors.tipos}</p>}
                        </div>

                    </div>

                    <button className="crear" disabled={!newPokemon.nombre || !newPokemon.vida || newPokemon.tipos.length < 1 || errors.nombre || errors.vida || errors.ataque || errors.imagen || errors.defensa}> </button>

                </form>

            </div>

        </>
    )
}

export default Form;
