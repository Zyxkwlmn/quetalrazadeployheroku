import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Client.scss';
import {useNavigate} from 'react-router-dom';

const CreateAppointment = () => {

    const [values, setValues] = useState({
        dni: '',
        password: '',
        name: '',
        lastname: '',
        address: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/CreateClient',values)
        .then(res => {
            console.log(res),
            navigate('/')
        })
        .catch(err => console.log(err))
    }

return(

 <div className="appointment">
            <div className="form-container">
            <h1 className="title">Reservar cita</h1>

            <form action="/" className="form">
                <div>  
                <label for="name" className="label">Mascota</label>
                <input type="text" id="idPet" placeholder="" className="input input-text"/>
                
                <label for="name" className="label">Fecha</label>
                <input type="date" id="dateAppo" placeholder="" className="input input-text"/>
                
                <label for="name" className="label">Fecha</label>
                <input type="time" id="timeAppo" placeholder="" className="input input-text"/>

                <label for="name" className="label">Motivo</label>
                <input type="text" id="reason" placeholder="" className="input input-text"/>

                <label for="name" className="label">Comentarios generales</label>
                <input type="text" id="comment" placeholder="" className="input input-text"/>

                <label for="status" className="label">Estatus</label>
                <select id="status" name="status" className="input">
                    <option value="1">Programado</option>
                    <option value="2">Realizado</option>
                    <option value="2">Cancelado</option>
                </select>

                <input type="button" value="Descartar" className="secondary-button login-button"/>
                <input type="submit" value="Reservar" className="primary-button login-button"/>

                </div>

            </form>
            </div>
        </div>
)
}


export default CreateAppointment