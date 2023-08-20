import React, { useState } from 'react';
import "./index.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Card(props) {
    const [showModal, setShowModal] = useState(false);

    function deleteCard(id) {
        axios.delete(`http://localhost:3001/submissoes/${id}`)
            .then(response => {
                console.log("RETURN:", response.data);
                props.fetchInitialCards();
                handleCloseModal();
                toast.success('Card removido com sucesso!', { toastId: 'success' });
            })
            .catch(error => {
                console.log("Erro ao deletar o card", error);
                toast.error('Erro ao remover o card.');
            });
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    function handleShowModal() {
        setShowModal(true);
    }

    return (
        <>
            <ToastContainer />
            <div className="card mx-2 shadow mb-3 pointer">
                <div className='m-1'>
                    <h6>Título: {props.title}</h6>
                    <small><p>Cadastrado em: {props.date}</p></small>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className="btn btn-danger btn-sm align-self-start rounded m-2" onClick={handleShowModal}>Excluir</button>
                    <button className="btn custom-detalhar-btn btn-sm align-self-end rounded m-2"><Link to={`/detalhar/${props.cardId}`}>Detalhar</Link></button>
                </div>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmar Exclusão</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tem certeza de que deseja excluir o card com o título "{props.title}"?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={() => deleteCard(props.cardId)}>
                            Excluir
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}
