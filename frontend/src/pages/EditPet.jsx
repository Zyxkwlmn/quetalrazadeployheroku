import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Pet.scss';
import {useNavigate, useParams} from 'react-router-dom';

const EditPet = () => {
    const {id} = useParams();
   
    useEffect(() => {
        axios.get('http://localhost:8080/ReadPet/'+id)
        .then(res => {
            console.log(res)
            setValues({...values,
                name:res.data[0].namePet,
                specie:res.data[0].speciePet,
                race:res.data[0].racePet,
                birthday:res.data[0].birthdatePet,
                gender:res.data[0].genderPet,
                photo:res.data[0].photoPet,
                description:res.data[0].descriptionPet});
        }).catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        name: '',
        specie: '',
        race: '',
        birthday: '',
        gender: '',
        photo: '',
        description: ''
    })

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8080/UpdatePet/'+id, values)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
    }
return(
<>
<Header />

<div className="pet">
            <div className="form-container">
            <h1 className="title">Editar Mascota</h1>

            <form action="/" className="form" onSubmit={handleUpdate}>
            <label for="name" className="label">Nombre</label>
                <input type="text" id="name" className="input input-name" onChange={e => setValues({...values,name: e.target.value})} value={values.name}/>

                <label for="name" className="label">Especie</label>
                <input type="text" id="specie" className="input input-name" onChange={e => setValues({...values,specie: e.target.value})} value={values.specie}/>

                <label for="name" className="label">Raza</label>
                <input type="text" id="race" className="input input-name" onChange={e => setValues({...values,race: e.target.value})} value={values.race}/>

                <label for="gender" className="label">Género</label>
                <select id="gender" name="gender" className="input" onChange={e => setValues({...values,gender: e.target.value})} value={values.gender}>
                    <option value="Hembra">Hembra</option>
                    <option value="Macho">Macho</option>
                </select>

                <label for="name" className="label">Fecha de Nacimiento</label>
                <input type="date" id="birthday" required pattern="\d{4}-\d{2}-\d{2}" className="input input-name" onChange={e => setValues({...values,birthday: e.target.value})} value={values.birthday}/>

                <label for="name" className="label">Descripción</label>
                <textarea className="" rows="3" id="description" onChange={e => setValues({...values,description: e.target.value})} value={values.description}></textarea>
                name
                <label for="password" className="label">¿Deseas que conoscamos más a tu mascota? Sube una foto!</label>
                <input type="file" id="photo" placeholder=""/>

                <input type="submit" value="Actualizar" className="primary-button login-button"/> 
                <input type="button" value="Descartar" className="secondary-button login-button"/>
                               
            </form>
            </div>
        </div>
    </>
)
}


export default EditPet;