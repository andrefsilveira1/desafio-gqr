import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/menu';
import SideBar from '../components/sidebar';

export default function Detalhar() {
    const { id } = useParams();

    return (
        <div className='d-flex flex-column'>
            <Menu />
            <div className='d-flex m-5'>
                <SideBar/>
                <div className='mt-5'>
                    <h1>DETALHAR {id}</h1>
                </div>
            </div>
        </div>
    );
}