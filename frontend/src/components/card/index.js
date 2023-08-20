import React from 'react';
import "./index.css";

export default function Card(props) {
    return (
        <div className="card mx-2 shadow mb-3 pointer">
            <div className='m-1'>
                <h6>Título: {props.title}</h6>
                <small><p>Cadastrado em: {props.date}</p></small>
            </div>
            <div className='d-flex justify-content-between'>
                <button className="btn btn-danger btn-sm align-self-start rounded m-2">Excluir</button>
                <button className="btn custom-detalhar-btn btn-sm align-self-end rounded m-2">Detalhar</button>
            </div>
        </div>
    )
}
