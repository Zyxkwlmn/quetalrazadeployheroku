import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Recovery from '../containers/Recovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Account from '../containers/Account';
import Appointment from '../containers/Appointment';
import Pet from '../pages/Pet';
import OrderResume from '../containers/_OrderResume';
import Session from '../containers/Session';
import Orders from '../containers/_Orders';
import AppContext from '../context/AppContext';
import Client from '../containers/Client';
import '../styles/global.css';
import useInitialState from '../hooks/useInitialState';

const App = () => {

    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="account" element={<Account/>}/>
                        <Route exact path="appointment" element={<Appointment/>}/>
                        <Route exact path="client" element={<Client/>}/>
                        <Route exact path="pet" element={<Pet/>}/>
                        <Route exact path="order" element={<OrderResume/>}/>
                        <Route exact path="session" element={<Session/>}/>
                        <Route exact path="orders" element={<Orders/>}/>
                        <Route exact path="recovery" element={<Recovery/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>        
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;

