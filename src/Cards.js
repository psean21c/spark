import React from 'react'
import {List} from "antd"

const styles = {
    fontFamily: "Arrial",
    padding: "10px",
    color: "black",
    backgroundColor: "lightblue",
  };
  
// JavaScript destructuring
export default function Cards({info}){
    // const {info} = props;
    return (
        <List>
        <div style={styles}> <b> {info.id} </b> : {info.firstname}  {info.lastname}</div>
        </List>
    )
}

