import React, { useEffect, useState } from "react"
import { housesApi } from "./HousesApi"
import House from './House'

function HousesList () {
 const [ houses, setHouses ] = useState([]);
 const [ newHouseName, setNewHouseName ] = useState('')
 const [ roomName , setRoomName ] = useState('');
 const [ roomArea , setRoomArea ] = useState('');

 useEffect(() => {
  housesApi.get()
  .then(data => setHouses(data))
 }, [])

 return(
  <div>
    <form onSubmit={addHouse}>
      <label for='house-name'>House Name: </label>
      <input type='text' placeholder='New House Name' onChange={(e)=>setNewHouseName(e.target.value)}></input>
      <button type='submit'>Submit</button>
    </form>
    {houses.map(house => <div key={house.id}><h4>{house.name}</h4><p>{house.rooms}</p></div>)}
  </div>
 )

}

export default HousesList;