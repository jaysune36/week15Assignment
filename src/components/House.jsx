import React from "react";

function House(props) {
  return(
    <div key={props.id} className="d-md-flex justify-content-center house-title">
      <h3 >{props.name}</h3>
      <button onClick={()=> {props.deleteHouse(props.id)}}>Delete</button>
    </div>
  )
}

export default House