import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Table(props) {

    useEffect(() => {
        function getData() {
            axios.get(`http://localhost:3001/data/${props.depth}`)
                .then(response => {
                    console.log("RESPOSTA:", response.data);
                })
                .catch(error => {
                    console.log("Algo deu errado:", error);
                });
        }
        getData();
    }, [props.depth]);
    return (
        <div className="container">
            <table className="table table-bordered table-responsive">
                <thead>
                    <tr>
                        <th>Depth</th>
                        <th>c1</th>
                        <th>c2</th>
                        <th>c3</th>
                        <th>nc4</th>
                        <th>ic4</th>
                        <th>nc5</th>
                        <th>ic5</th>
                        <th>TotalGas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Depth">Value</td>
                        <td data-label="c1">Value</td>
                        <td data-label="c2">Value</td>
                        <td data-label="c3">Value</td>
                        <td data-label="nc4">Value</td>
                        <td data-label="ic4">Value</td>
                        <td data-label="nc5">Value</td>
                        <td data-label="ic5">Value</td>
                        <td data-label="TotalGas">Value</td>
                    </tr>
                    {/* Adicione mais linhas aqui */}
                </tbody>
            </table>
        </div>
    );
}

