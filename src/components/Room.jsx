import React from "react";  
import { housesApi } from "./HousesApi";

export default function Room(props) {
  return (
    <li>Room Name: {props.name} - Area: {props.area} 
    <button className="ml-1">Delete</button></li>
  )
}