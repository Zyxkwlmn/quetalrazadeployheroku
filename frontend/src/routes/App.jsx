import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import CreateClient from '../pages/CreateClient';
import EditClient from '../pages/EditClient';
import ListPet from '../pages/ListPet';
import CreatePet from '../pages/CreatePet';
import EditPet from '../pages/EditPet';
import CreateAppo from '../pages/CreateAppo';
import ListAppo from '../pages/ListAppo';
import EditAppo from '../pages/EditAppo';
import NotFound from '../pages/NotFound';
import Account from '../containers/Account';
import '../styles/global.css';

const App = () => {

    return(
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/CreateClient" element={<CreateClient/>}/>
                        <Route exact path="/EditClient/:id" element={<EditClient/>}/>
                        <Route exact path="/ListPet/:id" element={<ListPet/>}/>
                        <Route exact path="/CreatePet/:id" element={<CreatePet/>}/>
                        <Route exact path="/EditPet/:id" element={<EditPet/>}/>
                        <Route exact path="/CreateAppo/:id" element={<CreateAppo/>}/>
                        <Route exact path="/ListAppo" element={<ListAppo/>}/>
                        <Route exact path="/EditAppo/:id" element={<EditAppo/>}/>
                        <Route exact path="account" element={<Account/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>        
                </Layout>
            </BrowserRouter>
    );
}

export default App;

