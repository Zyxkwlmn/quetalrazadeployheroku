import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Pet.scss';
import {useNavigate,useParams} from 'react-router-dom';

const CreatePet = () => {

    const {id} = useParams();

    const [values, setValues] = useState({
        idUser: id,
        name: '',
        specie: '',
        race: '',
        gender: '',
        birthday: '',
        description: '',
        photo: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/CreatePet/'+id,values)
        .then(res => {
            console.log(res),
            navigate('/ListPet/'+id)
        })
        .catch(err => console.log(err))
    }

return(
<>
<Header />

<div className="pet">
            <div className="form-container">
            <h1 className="title">Registrar Mascota</h1>

            <form action="/" className="form" onSubmit={handleSubmit}>
                <div>  
                <label for="name" className="label">Nombre</label>
                <input type="text" id="name" className="input input-name" onChange={e => setValues({...values,name: e.target.value})}/>

                <label for="name" className="label">Especie</label>
                <input type="text" id="specie" className="input input-name" onChange={e => setValues({...values,specie: e.target.value})}/>

                <label for="name" className="label">Raza</label>
                <input type="text" id="race" className="input input-name" onChange={e => setValues({...values,race: e.target.value})}/>

                <label for="gender" className="label">Género</label>
                <select id="gender" name="gender" className="input" onChange={e => setValues({...values,gender: e.target.value})}>
                    <option value="Hembra">Hembra</option>
                    <option value="Macho">Macho</option>
                </select>

                <label for="name" className="label">Fecha de Nacimiento</label>
                <input type="date" id="birthday" className="input input-name" onChange={e => setValues({...values,birthday: e.target.value})}/>

                <label for="name" className="label">Descripción</label>
                <textarea className="" rows="3" id="description" onChange={e => setValues({...values,description: e.target.value})}></textarea>

                <label for="password" className="label">¿Deseas que conoscamos más a tu mascota? Sube una foto!</label>
                <input type="file" id="photo" placeholder=""/>

                </div>

                <input type="submit" value="Registrar" className="primary-button login-button"/>
                <input type="submit" value="Descartar" className="secondary-button login-button"/>

            </form>
            </div>
        </div>
    </>
)
}


export default CreatePet;