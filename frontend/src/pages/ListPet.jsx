import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from 'react-router-dom';


const ListPet = () => {

    const {id} = useParams();

    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/ListPet/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/DeletePet/'+id)
        .then(res=> {
            alert("Eliminando")
            location.reload();
        }).catch(err => console.log(err))
    }
    return(
        <>
            <Header />
            <div>
                <Link to={`/CreatePet/${id}`}>Nueva Mascota</Link>
            </div>
           <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nombre</th>
                    <th>Especie</th>
                    <th>Raza</th>
                    <th>Género</th>
                    <th>Fecha Nacimiento</th>
                </tr>
            </thead>
            <tbody>
                {data.map((pet,index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{pet.namePet}</td>
                        <td>{pet.speciePet}</td>
                        <td>{pet.racePet}</td>
                        <td>{pet.genderPet}</td>
                        <td>{pet.birthdatePet}</td>
                        <td>
                            <Link to={`/EditPet/${pet.idPet}`}>Editar</Link>
                            <button onClick={() =>handleDelete(pet.idPet)}>Eliminar</button>
                        </td>
                    </tr>
                })}
            </tbody>
           </table>
        </>  
    );
}

export default ListPet;