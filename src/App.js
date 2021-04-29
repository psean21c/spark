import './App.css';
// import axios from 'axios'

// import {useState} from 'react';
// import React from 'react' // version 16 vs 17
import React, { useEffect, useState } from "react";

// import {Button} from "antd"


// state management
function App() {
  const title = "Welcome to React agan"
  const likes = 50;
  

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p> liked {likes}</p>
      </div>
    </div>
  )
}

export default App;

