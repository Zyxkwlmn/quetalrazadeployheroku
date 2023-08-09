import React, { useEffect, useState , Fragment} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/Pet.scss';
import {useNavigate,useParams} from 'react-router-dom';
import swal from 'sweetalert';

const CreateGrooming = () => {

    const {id} = useParams();

    //Listar datos de mascota
    const [dataPet, setDataPet] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/ListDataPet/'+id)
        .then(res => setDataPet(res.data))
        .catch(err => console.log(err));
    }, [])

    //Listar servicios de grooming
    const [dataGroo, setDataGroo] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/ListServicesGrooming')
        .then(res => setDataGroo(res.data))
        .catch(err => console.log(err));
    }, [])

    //Subir fotografía
    const [file, setFile] = useState(null);
    
    const handleSelected = (e) => {
        setFile(e.target.files[0])
    }

    const sendImage= () => {
        const formdata = new FormData()

        if (file) {
            formdata.append('imagePet',file)   
        }

        return formdata
    }

    //Capturar datos
    const [values, setValues] = useState({
        idAppo: id,
        services: '',
        photoBefore: '',
        photoAfter: '',
        comment: ''   
    })

    //Enviar datos
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/CreateGrooming/'+id,values)
        .then(res => {
            swal({
                text: "Servicio grooming registrado",
                icon: "success",
              });
            //   setTimeout(function(){
            //     navigate('/ListAppo/'+id);
            // }, 3000);
        })
        .catch(err => console.log(err))

        // document.getElementById('photo').value = null
        // setFile(null)
    }

return(
<>
<Header />

<div className="pet">
            <div className="form-container">
            <h1 className="title">Registrar Servicio Grooming</h1>

            <form action="/" className="form" onSubmit={handleSubmit}>

                <div>{dataPet.map((pet,index) => {
                        return <span>{pet.namePet} {pet.nameSpeciePet}</span>

                })} </div>

                <label for="services" className="label">Servicios Grooming</label>
                {dataGroo.map((groo,index) => {
                        return <label><input type="checkbox" id="services" className="input input-name" value={groo.idServicesGrooming} onChange={e => setValues({...values,services: e.target.value})}/>{groo.nameServicesGrooming}</label>
                    })}
                
                <label for="photoBefore" className="label">Subir foto antes</label>
                <input type="file" id="photoBefore" placeholder="" className="file" onChange={e => setValues({...values,photoBefore: e.target.value})}/>

                <label for="photoAfter" className="label">Subir foto despúes</label>
                <input type="file" id="photoAfter" placeholder="" className="file" onChange={e => setValues({...values,photoAfter: e.target.value})}/>
      
                <label for="comment" className="label">Comentarios</label>
                <textarea className="textarea" rows="3" id="comment" onChange={e => setValues({...values,comment: e.target.value})}></textarea>

                <input type="submit" value="Registrar" className="primary-button"/> 
                <input type="button" value="Descartar" className="secondary-button"/>
            </form>
            </div>
        </div>
    </>
)
}


export default CreateGrooming;