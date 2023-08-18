import React from 'react';
import "./index.css";

export default function Card(props) {
    return (
        <div className="card mx-2 shadow mb-3">
            <div className='m-1'>
                <h6>Título: {props.title}</h6>
                <p>Cadastrado em: {props.date}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <button className="card-btn-danger align-self-start rounded m-2">Excluir</button>
                <button className="card-btn align-self-end rounded m-2">Detalhar</button>
            </div>
        </div>
    )
}
