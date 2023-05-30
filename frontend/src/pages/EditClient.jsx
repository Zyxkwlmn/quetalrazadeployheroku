import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Client.scss';
import {useNavigate, useParams} from 'react-router-dom';

const EditClient = () => {
    const {id} = useParams();
   
    useEffect(() => {
        axios.get('http://localhost:8080/ReadClient/'+id)
        .then(res => {
            console.log(res)
            setValues({...values, dni:res.data[0].dniUser,
                name:res.data[0].nameUser,
                lastname:res.data[0].surnameUser,
                address:res.data[0].addressUser,
                email:res.data[0].emailUser,
                phone:res.data[0].phoneUser});
        }).catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        dni: '',
        name: '',
        lastname: '',
        address: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8080/UpdateClient/'+id, values)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
    }
return(

<div className="client">
            <div className="form-container">
            <h1 className="title">Editar Cliente</h1>

            <form action="/" className="form" onSubmit={handleUpdate}>
                <label for="name" className="label">Nombres</label>
                <input type="text" id="name" placeholder="" className="input input-text" onChange={e => setValues({...values,name: e.target.value})} value={values.name}/>

                <label for="name" className="label">Apellidos</label>
                <input type="text" id="lastname" placeholder="" className="input input-text" onChange={e => setValues({...values,lastname: e.target.value})} value={values.lastname}/>

                <label for="name" className="label">DNI</label>
                <input type="text" id="dni" placeholder="" className="input input-text" onChange={e => setValues({...values,dni: e.target.value})} value={values.dni}/>

                <label for="name" className="label">Dirección</label>
                <input type="text" id="address" placeholder="" className="input input-text" onChange={e => setValues({...values,address: e.target.value})} value={values.address}/>

                <label for="email" className="label">Email</label>
                <input type="text" id="email" placeholder="" className="input input-email" onChange={e => setValues({...values,email: e.target.value})} value={values.email}/>

                <label for="name" className="label">N° de celular</label>
                <input type="text" id="phone" placeholder="" className="input input-text" onChange={e => setValues({...values,phone: e.target.value})} value={values.phone}/>

                <input type="submit" value="Actualizar" className="primary-button login-button"/> 
                <input type="button" value="Descartar" className="secondary-button login-button"/>
                               
            </form>
            </div>
        </div>

)
}


export default EditClient;