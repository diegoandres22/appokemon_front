

import View from '../../components/View/View';
import Detail from '../../components/Detail/Detail';
import { useSelector } from "react-redux";

const ViewPoke = () => {

    const { aPokemon } = useSelector(state => state);

    

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
                types={aPokemon?.tipos} />
            {/* <Detail
                
                id={aPokemon?.id}
                nombre={aPokemon?.nombre}
                imagen={aPokemon?.imagen}
                vida={aPokemon?.vida}
                ataque={aPokemon?.ataque}
                defensa={aPokemon?.defensa}
                velocidad={aPokemon?.velocidad}
                altura={aPokemon?.altura}
                peso={aPokemon?.peso}
                types={aPokemon?.types} /> */}

        </div>

    )
}

export default ViewPoke;
