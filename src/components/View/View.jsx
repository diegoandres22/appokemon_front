import './View.css'


import { useDispatch } from "react-redux";
import { deletePokemon } from "../../redux/actions";
import { Link } from "react-router-dom";

const View = ({ id, nombre, imagen, types, vida, ataque, defensa, velocidad, altura, peso }) => {


    const dispatch = useDispatch();

    const handleDelete = () => {

        dispatch(deletePokemon(id))

        alert('Pokemon eliminado correctamente')
    }

    return (


        <div className="detailCont" >


            <div className="atrascont">
                <button className=' flechacont'>
                    <Link className='flecha' to='/home'> V </Link>
                </button>
            </div>


            <div className="imgtarget">
                < img src={imagen} alt="" />
                {id?.length > 20 &&
                    <Link className='flecha' to='/home'>
                        <button onClick={handleDelete} >Eliminar Pokemon</button>
                    </Link>}
            </div>


            <div className="target">
                <h2>detalle del pokemon {nombre}</h2>
                <p>vida: {vida}</p>
                <p>ataque: {ataque}</p>
                <p>defensa: {defensa}</p>
                <p>velocidad: {velocidad}</p>
                <p>altura: {altura}</p>
                <p>peso: {peso}</p>
                <p>de tipo: {types}</p>
            </div>


        </div>
    )

}

export default View;