import React from 'react'


export default function (onClose= () => {}) {
    return <div className="modal">
        <div className="container">
            <button className="close" onClick={onClose}>x</button>
            <label htmlFor="Email">Email:</label>
            <input type="text"/>
            <label htmlFor="Senha">Senha:</label>
            <input type="password"/>
        </div>
    </div>
};