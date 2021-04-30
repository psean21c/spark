// import axios from 'axios'

// import {useState} from 'react';
// import React, { useEffect, useState } from "react";

// import {Button} from "antd"
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Blog from './Blog';

// state management
function App() {
// class App extends React.Component {
    const REACT_VERSION = React.version;



  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <Blog/>
        <p> version is {REACT_VERSION}</p>
      </div>
    </div>
  )
}

export default App;

