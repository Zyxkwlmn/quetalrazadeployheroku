import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Client.scss';
import {useNavigate, useParams} from 'react-router-dom';
import swal from 'sweetalert';

const CreateAppointment = () => {
    const {id} = useParams();

    //Mostrar nombre mascota
    useEffect(() => {
        axios.get('http://localhost:8080/ReadPet/'+id)
        .then(res => {
            console.log(res)
            setName({...value,
                idPet: res.data[0].idPet,
                namePet:res.data[0].namePet});
        }).catch(err => console.log(err))
    }, [])

    const [value, setName] = useState({
        idPet: '',
        namePet: ''
    })

    //Crear cita
    const [values, setValues] = useState({
        idPet:id,
        dateAppo: '',
        timeAppo: '',
        reason: '',
        comment: '',
        status: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/CreateAppo',values)
        .then(res => {
            swal({
                text: "Cita reservada",
                icon: "success",
              });
              setTimeout(function(){
                navigate('/ListAppo/'+id);
            }, 3000);
            
        })
        .catch(err => console.log(err))
    }

return(
<>
<Header />
 <div className="client">
            <div className="form-container">
            <h1 className="title">Reservar cita</h1>

            <form action="/" className="form" onSubmit={handleSubmit}>
                <div> 
                <label for="name" className="label">Mascota</label>
                <input type="text" id="namePet" className="input input-text" value={value.namePet}/>
                
                <label for="name" className="label">Fecha</label>
                <input type="date" id="dateAppo" className="input input-text" onChange={e => setValues({...values,dateAppo: e.target.value})}/>
                
                <label for="name" className="label">Fecha</label>
                <input type="time" id="timeAppo" className="input input-text" onChange={e => setValues({...values,timeAppo: e.target.value})}/>

                <label for="name" className="label">Motivo</label>
                <input type="text" id="reason" className="input input-text" onChange={e => setValues({...values,reason: e.target.value})}/>

                <label for="name" className="label">Comentarios generales</label>
                <input type="text" id="comment" className="input input-text" onChange={e => setValues({...values,comment: e.target.value})}/>

                <label for="status" className="label">Estatus</label>
                <select id="status" name="status" className="input" onChange={e => setValues({...values,status: e.target.value})}>
                    <option selected>Seleccionar</option>
                    <option value="Programado">Programado</option>
                    <option value="Realizado">Realizado</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
                
                <input type="submit" value="Reservar" className="primary-button"/> 
                <input type="button" value="Descartar" className="secondary-button"/>

                </div>

            </form>
            </div>
        </div>
    </>
)
}


export default CreateAppointment