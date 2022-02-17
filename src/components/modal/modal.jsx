import React from 'react'
import Login from './login'
import Cadastro from './cadastro'
import './modal.css'


export default function ({id='modal', onClose = () => {}}) {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }
    const Cad = () => {
        onClose()
    }

    return <div id={id} className="modal" onClick={handleOutsideClick}>
        <div className="container">
            <div class="d-flex justify-content-end">
                <button className="close " onClick={onClose}>x</button>
            </div>
            <section>
                <Login/>
                <Cadastro/>
            </section>
        </div>
    </div>
};