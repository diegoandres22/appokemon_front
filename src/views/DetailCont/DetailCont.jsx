
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Detail from "../../components/Detail/Detail";
import { getPokemonById } from "../../redux/actions";

import { useSelector } from "react-redux";

const DetailCont = () => {

    const { id } = useParams();
    const { aPokemon } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getPokemonById(id));

    }, []);

    return (
        <div >
            {
                aPokemon.map((aPoke, index) => {

                    const aidi = index;

                    return <Detail
                        key={aidi}
                        nombre={aPoke?.nombre}
                        imagen={aPoke?.imagen}
                        vida={aPoke?.vida}
                        ataque={aPoke?.ataque}
                        defensa={aPoke?.defensa}
                        velocidad={aPoke?.velocidad}
                        altura={aPoke?.altura}
                        peso={aPoke?.peso}
                        id={aPoke?.id}
                        types={aPoke?.types} />
                })
            }

        </div>
    )
}

export default DetailCont;

