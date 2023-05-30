import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from 'react-router-dom';


const ListAppo = () => {

    const {id} = useParams();

    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/ListAppo/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/DeleteAppo/'+id)
        .then(res=> {
            alert("Eliminando")
            location.reload();
        }).catch(err => console.log(err))
    }
    return(
        <>
            <Header />
           <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Motivo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map((appo,index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{appo.dateAppointment}</td>
                        <td>{appo.timeAppointment}</td>
                        <td>{appo.reasonAppointment}</td>
                        <td>{appo.statusAppointment}</td>
                        <td>
                            <Link to={`/EditAppo/${appo.idAppointment}`}>Editar</Link>
                            <button onClick={() =>handleDelete(appo.idAppointment)}>Eliminar</button>
                        </td>
                    </tr>
                })}
            </tbody>
           </table>
        </>  
    );
}

export default ListAppo;