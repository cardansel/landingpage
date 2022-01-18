import React from 'react';
import {BrowserRouter as Router,NavLink,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './sass/app.scss';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {Home} from './components/Home';
import {AddMessage, AddUser} from './components/AddMessage';
import{EditMessage} from './components/EditMessage';

const BaseUrl='http://localhost:8000/api/comments'

function App() {

const [data,setData]=useState([]);
const peticionGet=async()=>{
  await axios.get(BaseUrl)
    .then(response=>{
      console.log(response.data);
    })
}

useEffect(async()=>{
  await peticionGet();
},[])

  return (
    <div className="App">
     <Router>
       <h1>Nav</h1>
       <NavLink>
        <Home />
        <AddMessage />
        <EditMessage />
       </NavLink>
     </Router>
  
    </div>
  );
}

export default App;
