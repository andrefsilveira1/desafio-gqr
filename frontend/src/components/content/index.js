import React from 'react';
import "./index.css";
import { BsFillClipboardDataFill } from 'react-icons/bs';

export default function Content() {
    return (
        <div className='container-content m-5'>
            <div className='row d-flex justify-content-around'>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="container-card card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Profundidade </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">800</div>
                                </div>
                                <div className="col-auto">
                                    <BsFillClipboardDataFill size={32} color="gray" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="container-card card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">GQR máximo </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">Teste</div>
                                </div>
                                <div className="col-auto">
                                    <BsFillClipboardDataFill size={32} color="gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="container-card card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">GQR mínimo </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">Teste</div>
                                </div>
                                <div className="col-auto">
                                    <BsFillClipboardDataFill size={32} color="gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}