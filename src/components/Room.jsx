import React from "react";  
import { housesApi } from "./HousesApi";

export default function Room(props) {

  const deleteRoom = async (roomId) => {
    const updatedHouse = {
      ...props.house,
      rooms: props.house.rooms.filter((x) => x.id !== roomId)
    }
    await housesApi.put(props.house.id, updatedHouse)
    props.fetchHouses();
  }

  return (
    <li>Room Name: {props.name} - Area: {props.area} 
    <button className="ml-1 btn btn-outline-danger" onClick={(e)=>deleteRoom(props.id)}>Delete</button></li>
  )
}