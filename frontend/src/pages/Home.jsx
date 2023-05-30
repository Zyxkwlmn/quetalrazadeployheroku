import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../styles/List.scss';
import swal from 'sweetalert';


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
            swal({
                text: "Eliminando registro",
                icon: "warning",
              });
              setTimeout(function(){
                location.reload();
            }, 3000);
            
        }).catch(err => console.log(err))
    }
    return(
        <>
            <Header />
            <div className="list-content">
            <div><h3>Clientes</h3></div>
            <div>
                <input class="input-inset" type="text" placeholder="Search"/> 
                <Link to="/CreateClient" className="button create-button">Nuevo Cliente</Link>
            </div>
            <div>
           <table className="styled-table">
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
                            <Link to={`/ListPet/${user.idUser}`} className="button pet-button">Mascotas</Link>
                            <Link to={`/EditClient/${user.idUser}`} className="button edit-button">Editar</Link>
                            <a onClick={() =>handleDelete(user.idUser)} className="button delete-button">Eliminar</a>
                        </td>
                    </tr>
                })}
            </tbody>
           </table>
           </div>
           </div>
        </>  
    );
}

export default Home;