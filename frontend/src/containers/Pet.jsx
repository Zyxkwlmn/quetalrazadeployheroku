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

                <label for="gender" className="label">Género</label>
                <select id="pet_gender" name="gender" className="input">
                    <option value="volvo">Hembra</option>
                    <option value="saab">Macho</option>
                </select>

                <label for="name" className="label">Fecha de Nacimiento</label>
                <input type="date" id="birthday" placeholder="" className="input input-name"/>

                <label for="name" className="label">Descripción</label>
                <textarea class="" rows="3" ></textarea>

                <label for="password" className="label">¿Deseas que conoscamos más a tu mascota? Sube una foto!</label>
                <input type="file" id="photo" placeholder=""/>

                </div>

                <input type="submit" value="Registrar" className="primary-button login-button"/>
                <input type="submit" value="Descartar" className="secondary-button login-button"/>

            </form>
            </div>
        </div>
    );
}

export default Pet;