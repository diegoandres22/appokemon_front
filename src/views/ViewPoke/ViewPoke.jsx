

// import { useEffect } from 'react';
import View from '../../components/View/View';
import { useSelector } from "react-redux";

// import { deleteStateG } from "../../redux/actions";
import { useDispatch } from "react-redux";

const ViewPoke = () => {

    const { aPokemon } = useSelector(state => state);
    // const dispatch = useDispatch();

    // useEffect(() => {

    //     return dispatch(deleteStateG());

    // }, []);

    return (
        <div>

            < View
                key={aPokemon?.id}
                nombre={aPokemon?.nombre}
                imagen={aPokemon?.imagen}
                vida={aPokemon?.vida}
                ataque={aPokemon?.ataque}
                defensa={aPokemon?.defensa}
                velocidad={aPokemon?.velocidad}
                altura={aPokemon?.altura}
                peso={aPokemon?.peso}
                id={aPokemon?.id}
                types={aPokemon?.types} />

        </div>

    )
}

export default ViewPoke;
