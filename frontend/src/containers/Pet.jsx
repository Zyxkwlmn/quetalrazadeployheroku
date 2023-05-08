import React from 'react';
import '../styles/Pet.scss';

const Pet = () => {
    return (
        <div className="pet">
            <div className="form-container">
            <h1 className="title">Registrar Mascota</h1>

            <form action="/" className="form">
                <div>  
                <label for="name" className="label">Nombre</label>
                <input type="text" id="name" placeholder="" className="input input-name"/>

                <label for="name" className="label">Especie</label>
                <input type="text" id="pet_type" placeholder="" className="input input-name"/>

                <label for="name" className="label">Raza</label>
                <input type="text" id="raze" placeholder="" className="input input-name"/>

                <label for="email" className="label">Género</label>
                <input type="text" id="gender" placeholder="" className="input input-name"/>

                <label for="name" className="label">Fecha de Nacimiento</label>
                <input type="date" id="birthday" placeholder="" className="input input-name"/>

                <label for="name" className="label">Descripción</label>
                <input type="text" id="color" placeholder="" className="input input-name"/>

                <label for="password" className="label">¿Deseas que conoscamos más a tu mascota? Sube una foto!</label>
                <input type="file" id="photo" placeholder="" className="secondary-button"/>

                </div>

                <input type="submit" value="Continuar" className="primary-button login-button"/>
                <input type="submit" value="Cancelar" className="secondary-button login-button"/>

            </form>
            </div>
        </div>
    );
}

export default Pet;