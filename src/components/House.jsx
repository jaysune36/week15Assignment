import React from "react";

function House(props) {

  let rooms = [];
  if(props.rooms) {
    rooms.map((room, index) => {
      <li key={index}>{room.name}<button>Delete</button></li>
    })
  }
  return(
    <div key={props.id}>
      <h3>{props.name}</h3>
      <ul>
        {rooms}
      </ul>
    </div>
  )
}

export default House