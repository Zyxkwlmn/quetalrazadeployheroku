import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Pet.scss';
import {useNavigate,useParams} from 'react-router-dom';
import swal from 'sweetalert';

const CreatePet = () => {

    const {id} = useParams();

    const [values, setValues] = useState({
        idUser: id,
        name: '',
        specie: '',
        gender: '',
        origin: '',
        race: '',
        color: '',
        birthday: '',
        description: '',
        photo: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/CreatePet/'+id,values)
        .then(res => {
            swal({
                text: "Mascota registrada",
                icon: "success",
              });
              setTimeout(function(){
                navigate('/ListPet/'+id);
            }, 3000);
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

                <label for="gender" className="label">Género</label>
                <select id="gender" name="gender" className="input" onChange={e => setValues({...values,gender: e.target.value})}>
                    <option selected>Seleccionar</option>
                    <option value="1">Hembra</option>
                    <option value="2">Macho</option>
                </select>

                <label for="origin" className="label">Procedencia</label>
                <select id="origin" name="origin" className="input" onChange={e => setValues({...values,origin: e.target.value})}>
                    <option selected>Seleccionar</option>
                    <option value="1">Local</option>
                    <option value="2">Extranjero</option>
                </select>

                <label for="name" className="label">Raza</label>
                <input type="text" id="race" className="input input-name" onChange={e => setValues({...values,race: e.target.value})}/>

                <label for="name" className="label">Color</label>
                <input type="text" id="color" className="input input-name" onChange={e => setValues({...values,color: e.target.value})}/>


                <label for="name" className="label">Fecha de Nacimiento</label>
                <input type="date" id="birthday" className="input input-name" onChange={e => setValues({...values,birthday: e.target.value})}/>

                <label for="name" className="label">Señas particulares</label>
                <textarea className="textarea" rows="3" id="description" onChange={e => setValues({...values,description: e.target.value})}></textarea>

                <label for="password" className="label">¿Deseas que conoscamos más a tu mascota? Sube una foto!</label>
                <input type="file" id="photo" placeholder="" className="file"/>
                </div>

                <input type="submit" value="Registrar" className="primary-button"/> 
                <input type="button" value="Descartar" className="secondary-button"/>
            </form>
            </div>
        </div>
    </>
)
}


export default CreatePet;