import React from 'react';
import '../styles/Client.scss';

const Client = () => {
    return (
        <div className="client">
            <div className="form-container">
            <h1 className="title">Registrar Cliente</h1>

            <form action="/" className="form">
                <label for="name" className="label">Nombres</label>
                <input type="text" id="name" placeholder="" className="input input-text"/>

                <label for="name" className="label">Apellidos</label>
                <input type="text" id="lastname" placeholder="" className="input input-text"/>

                <label for="name" className="label">DNI</label>
                <input type="text" id="dni" placeholder="" className="input input-text"/>

                <label for="name" className="label">Dirección</label>
                <input type="text" id="address" placeholder="" className="input input-text"/>

                <label for="email" className="label">Email</label>
                <input type="text" id="email" placeholder="" className="input input-email"/>

                <label for="name" className="label">N° de celular</label>
                <input type="text" id="phone" placeholder="" className="input input-text"/>

                <input type="submit" value="Registrar" className="primary-button login-button"/> 
                <input type="button" value="Descartar" className="secondary-button login-button"/>
                               
            </form>
            </div>
        </div>
    );
}

export default Client;