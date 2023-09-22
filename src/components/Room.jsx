import React from "react";  
import { housesApi } from "./HousesApi";

export default function Room(props) {

  // deleteRoom accepts the Room ID and uses the put method to filter through the room array and return the new array without the matching roomID passed in
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