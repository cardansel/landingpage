import React from 'react';
import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
