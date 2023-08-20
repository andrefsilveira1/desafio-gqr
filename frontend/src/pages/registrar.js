import Menu from "../components/menu";
import SideBar from "../components/sidebar";
import React, { useState } from 'react';
import "./index.css";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



export default function Registrar() {
    const [title, setTitle] = useState('');
    const [documentFile, setDocumentFile] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        const formData = new FormData();
        formData.append('name', title);
        formData.append('csv', documentFile);

        axios.post('http://localhost:3001/upload-csv', formData)
            .then(response => {
                console.log('Resposta do servidor:', response.data);
            })
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error);
                toast.error('Erro ao enviar arquivo.');
            });
            toast.success('Arquivo enviado com sucesso');

    };

    return (
        <div>
            <Menu />
            <div className="d-flex m-5">
                <SideBar />
                <div className="container-register p-5 m-5 flex-column shadow">
                    <form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                        style={{ width: '100%', padding: '50px', border: '1px solid #ccc', borderRadius: '5px' }}
                        className="m-5 p-5"
                        encType="multipart/form-data"
                    >
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Título
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Digite o título"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                name="name"
                                required
                            />
                            <div className="invalid-feedback">Por favor, insira um título.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="documentFile" className="form-label">
                                Documento (CSV)
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="documentFile"
                                accept=".csv"
                                onChange={(e) => setDocumentFile(e.target.files[0])}
                                name="csv"
                                required
                            />
                            <div className="invalid-feedback">Por favor, selecione um arquivo CSV.</div>
                        </div>

                        <button type="submit" className="btn custom-detalhar-btn">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}