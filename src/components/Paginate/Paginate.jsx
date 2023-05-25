import './Paginate.css'

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, backPage } from "../../redux/actions";

const Paginate = ({ cantPages }) => {

    const dispatch = useDispatch();

    const { page } = useSelector(state => state);

    const next = () => {
        dispatch(nextPage())
    }
    const back = () => {
        dispatch(backPage())
    }

    return (
        <div className="pagCont">
            {page > 1 && <button className="btndis" onClick={back}>back</button>}

            {page > 1 && <p>{page - 1}</p>}

            <p className='pag'>{page}</p>

            {page < cantPages && <p>{page + 1}</p>}

            {page < cantPages && <button className="btndis" onClick={next}>next</button>}

        </div>
    )
}

export default Paginate;