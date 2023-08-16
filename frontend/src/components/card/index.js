import React from 'react';
import "./index.css"

export default function Card(props) {
    return (
        <div className="card mx-2 shadow mb-5 bg-white rounded d-flex flex-column justify-content-between">
            <div className='m-1'>
                <h6>Título: {props.title}</h6>
                <p>Cadastrado em: {props.date}</p>
            </div>
            <button className="align-self-end btn bg-custom-purple text-custom-white">Detalhar</button>
        </div>
    )
}
