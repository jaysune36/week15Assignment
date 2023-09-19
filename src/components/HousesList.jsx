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
 }, []);

const fetchHouses = async() => {
  const houses = await housesApi.get();
  setHouses(houses)
}

 const addHouse = async (e) => {
  e.preventDefault();
  await housesApi.post({name: newHouseName, rooms: []});
  fetchHouses()
  setNewHouseName('')
 } 

 const deleteHouse = async (id) => {
  await housesApi.delete(id);
  fetchHouses();
 }

 return(
  <div>
    <form onSubmit={addHouse}>
      <label htmlFor='house-name'>House Name: </label>
      <input type='text' placeholder='New House Name' onChange={(e)=>setNewHouseName(e.target.value)} value={newHouseName}></input>
      <button type='submit'>Submit</button>
    </form>
    {houses.map(house => <div key={house.id}><h4>{house.name}</h4><p key={house.id}>{house.rooms}</p><button onClick={()=>deleteHouse(house.id)}>Delete</button></div>)}
  </div>
 )

}

export default HousesList;