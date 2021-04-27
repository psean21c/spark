import './App.css';
import axios from 'axios'

// import {useState} from 'react';
// import React from 'react'
import React, { useEffect, useState } from "react";
import Cards from './Cards.js'

import {Button} from "antd"
const onClick2 = () => console.log("Works!");


// state management
function App() {
  const [data, setData] = useState(null)

  useEffect(()=> { // side effect  : async logic 
    axios.get('https://au7u1y8j67.execute-api.us-east-1.amazonaws.com/lambdaStageTest1/resourcestudents')
    .then((res) => {
      // console.log(res.data.body);
     res.data && setData(res.data.body);
    })
    .catch((err) => console.log(err))
  },[])
  return data ? (
    <div className="App">
      {data.map((info,index) => {
        return <Cards key={index} info={info}/>
      })}
    <Button type="primary" onClick="onClick2" loading> Tree Loading</Button>
          
    </div>

) : <div>
    loading
  </div>; // loading icon...
}

export default App;

