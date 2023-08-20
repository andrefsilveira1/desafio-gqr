import React from 'react';
import "./index.css";
import axios from 'axios';


export default function Card(props) {

    function deleteCard(id) {
        axios.delete(`http://localhost:3001/submissoes/${id}`)
            .then(response => {
                console.log("RETURN:", response.data);
                alert("Card removido com sucesso!");
                props.fetchInitialCards();
            })
            .catch(error => console.log("Erro ao deletar o card", error));
    }

    return (
        <div className="card mx-2 shadow mb-3 pointer">
            <div className='m-1'>
                <h6>Título: {props.title}</h6>
                <small><p>Cadastrado em: {props.date}</p></small>
            </div>
            <div className='d-flex justify-content-between'>
                <button className="btn btn-danger btn-sm align-self-start rounded m-2" onClick={() => deleteCard(props.cardId)}>Excluir</button>
                <button className="btn custom-detalhar-btn btn-sm align-self-end rounded m-2">Detalhar</button>
            </div>
        </div>
    )
}
