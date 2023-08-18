import React from 'react';
import "./index.css";
import { BsFillClipboardDataFill } from 'react-icons/bs';

export default function Content() {
    return (
        <div className='container-content m-5 d-flex flex-column shadow'>
            <div className='row d-flex justify-content-around'>
                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="container-card card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1">Quantidade de submissões </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">800</div>
                                </div>
                                <div className="col-auto">
                                    <BsFillClipboardDataFill size={32} color="gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="container-card  card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1">GQR máximo </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">Teste</div>
                                </div>
                                <div className="col-auto">
                                    <BsFillClipboardDataFill size={32} color="gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="container-card  card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1">GQR mínimo </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">Teste</div>
                                </div>
                                <div className="col-auto">
                                    <BsFillClipboardDataFill size={32} color="gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className='align-self-center mt-5'>Clique em detalhar para obter mais informações</h5>
        </div>
    );
}
