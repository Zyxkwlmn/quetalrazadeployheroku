import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Home = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/DeleteClient/'+id)
        .then(res=> {
            alert("Eliminando")
            location.reload();
        }).catch(err => console.log(err))
    }
    return(
        <>
            <Header />
            <div>
                <Link to="/CreateClient">Nuevo Cliente</Link>
            </div>
           <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Dirección</th>
                    <th>Celular</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user,index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.idUser}</td>
                        <td>{user.nameUser}</td>
                        <td>{user.addressUser}</td>
                        <td>{user.phoneUser}</td>
                        <td>
                            <Link to={`/ListPet/${user.idUser}`}>Mascotas</Link>
                            <Link to={`/EditClient/${user.idUser}`}>Editar</Link>
                            <button onClick={() =>handleDelete(user.idUser)}>Eliminar</button>
                        </td>
                    </tr>
                })}
            </tbody>
           </table>
        </>  
    );
}

export default Home;