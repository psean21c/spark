// import axios from 'axios'

// import {useState} from 'react';
// import React, { useEffect, useState } from "react";

// import {Button} from "antd"
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

// state management
function App() {
  const REACT_VERSION = React.version;

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <p> version is {REACT_VERSION}</p>
      </div>
      
      
    </div>
  )
}

export default App;

