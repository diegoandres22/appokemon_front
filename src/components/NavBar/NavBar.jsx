import './NavBar.css'

import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {


    const location = useLocation();

    return (
        <nav className='nav'>

            <button className='logocont'>
                <Link className='logo' to='/'> </Link>
            </button>

            {location.pathname !== "/form" && <button className='botonSearch'>
                <Link className='btntext' to='/form'> Añadir </Link>
            </button>}

            <SearchBar />

            <button className='botonSearch'>
                <a className='btntext' href="">favoritos</a>
            </button>

            <button className='botonSearch'>
                <Link className='btntext' to='/'>INGRESAR</Link>
            </button>
        </nav>
    )
}

export default NavBar; 