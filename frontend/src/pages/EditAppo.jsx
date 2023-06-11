import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Client.scss';
import {useNavigate, useParams} from 'react-router-dom';
import swal from 'sweetalert';

const EditClient = () => {
    const {id} = useParams();
   
    useEffect(() => {
        axios.get('http://localhost:8080/ReadAppo/'+id)
        .then(res => {
            console.log(res)
            setValues({...values, 
                namePet: res.data[0].namePet,
                dateAppo:res.data[0].dateAppointment,
                timeAppo:res.data[0].timeAppointment,
                reason:res.data[0].reasonAppointment,
                comment:res.data[0].commentAppointment,
                status:res.data[0].statusAppointment});
        }).catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        namePet: '',
        dateAppo: '',
        timeAppo: '',
        reason: '',
        comment: '',
        status: ''
    })

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8080/UpdateAppo/'+id, values)
        .then(res => {
            swal({
                text: "Registro de cita actualizada",
                icon: "success",
              });
              setTimeout(function(){
                navigate('/ListAppo');
            }, 3000);
        }).catch(err => console.log(err))
    }
return(

<div className="client">
            <div className="form-container">
            <h1 className="title">Editar Cita</h1>

            <form action="/" className="form" onSubmit={handleUpdate}>
            <div> 
                <label for="name" className="label">Mascota</label>
                <input type="text" id="namePet" className="input input-text" value={values.namePet}/>
                
                <label for="name" className="label">Fecha</label>
                <input type="date" id="dateAppo" className="input input-text" onChange={e => setValues({...values,dateAppo: e.target.value})} value={values.dateAppo}/>
                
                <label for="name" className="label">Fecha</label>
                <input type="time" id="timeAppo" className="input input-text" onChange={e => setValues({...values,timeAppo: e.target.value})} value={values.timeAppo}/>

                <label for="name" className="label">Motivo</label>
                <input type="text" id="reason" className="input input-text" onChange={e => setValues({...values,reason: e.target.value})} value={values.reason}/>

                <label for="name" className="label">Comentarios generales</label>
                <input type="text" id="comment" className="input input-text" onChange={e => setValues({...values,comment: e.target.value})} value={values.comment}/>

                <label for="status" className="label">Estatus</label>
                <select id="status" name="status" className="input" onChange={e => setValues({...values,status: e.target.value})} value={values.status}>
                    <option value="Programado">Programado</option>
                    <option value="Realizado">Realizado</option>
                    <option value="Cancelado">Cancelado</option>
                </select>

                <input type="submit" value="Registrar" className="primary-button"/> 
                <input type="button" value="Descartar" className="secondary-button"/>

                </div>
                               
            </form>
            </div>
        </div>

)
}


export default EditClient;