import React from 'react';
import '../styles/Appointment.scss';

const Appointment = () => {
    return (
        <div className="appointment">
            <div className="form-container">
            <h1 className="title">Reservar cita</h1>

            <form action="/" className="form">
                <div>  
                <label for="name" className="label">Mascota</label>
                <input type="text" id="name" placeholder="" className="input input-text"/>
                
                <label for="name" className="label">Fecha</label>
                <input type="date" id="name" placeholder="" className="input input-text"/>
                
                <div className="calendar-container">
                    <div className="calendar">Fecha por mes</div>

                    <div className="hours">Horas del día</div>
                </div>

                <label for="name" className="label">Razón</label>
                <input type="text" id="name" placeholder="" className="input input-text"/>

                <label for="name" className="label">Comentarios generales</label>
                <input type="text" id="name" placeholder="" className="input input-text"/>

                <input type="button" value="Descartar" className="secondary-button login-button"/>
                <input type="submit" value="Reservar" className="primary-button login-button"/>

                </div>

            </form>
            </div>
        </div>
    );
}

export default Appointment;