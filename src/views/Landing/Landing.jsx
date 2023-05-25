import './Landing.css';

import { Link } from "react-router-dom"
import { useState } from 'react';

const Landing = () => {

    const [state, setState] = useState(false);

    const handletrue = () => {
        setState(true)
    }
    const handlecfalse = () => {
        setState(false)
    }

    return (

        <div className='landinContent' >
            <div className="start">
                <p className='imgTitle' />

                <div className="data">
                    <h1 className='titulo fondi'>Todos los pokemones </h1>

                    <h3 className='fondi'>Acá podrás ver toda la información acerca de los pokemones que gustes, ordenarlos de mayor a menor ataque o vice versa y verlos por tipo. </h3>
                </div>

                <Link className='comencont' to="home"><p className='comen'></p> </Link>
            </div>

            <div className="end">

                <p className='text'>Por que no le sacas mayor provecho? </p>

                {state && <form className="fomr">

                    <div className="formu">
                        <label className='label'>Email</label>
                        <input type="text" />

                        <label className='label'>contraseña</label>
                        <input type="text" />

                        <button className='inici'></button>

                    </div>
                </form>}

                {!state && <form className="fomr">

                    <div className="formu">
                        <label className='label'>Email</label>
                        <input type="text" />

                        <label className='label'>contraseña</label>
                        <input type="text" />

                        <button className='regist'></button>
                    </div>

                </form>}

                <div className="switch">

                    {!state && <p >Tengo una cuenta, quiero <button className='btnswitch' onClick={handletrue}>Ingresar</button></p>
                    }

                    {state && <p >No tengo cuenta, quiero <button className='btnswitch' onClick={handlecfalse}>Registrarme</button> </p>}

                </div>

                <p>Así podrás almacenar tus  pokemones favoritos, añadir pokemones, enterarte de las ultimas noticias acerca de este mundo y poder disfrutar de las futuras modificaciones de la plataforma!</p>



            </div>
        </div>

    )
}

export default Landing;