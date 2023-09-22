import React, {useEffect, useState} from "react"
import {housesApi} from "./HousesApi"
import House from './House'
import HouseUpdate from "./HouseUpdate";
import RoomsList from "./Roomlist"

function HousesList() {
  const [houses, setHouses] = useState([]);
  const [newHouseName, setNewHouseName] = useState('');

  useEffect(() => {
    housesApi.get().then(data => setHouses(data))
  }, []);

  const fetchHouses = async () => {
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

  async function updateHouse (e, id, house) {
    e.preventDefault();
    await housesApi.put(id, house)
    fetchHouses();
  }

  return (
    <div>
      <h1 className="mb-5">House CRUD</h1>
      <form onSubmit={addHouse} className="mb-5 border-top pt-2">
        <label htmlFor='house-name'>Add New House:
        </label>
        <input type='text' placeholder='New House Name'
          onChange={
            (e) => setNewHouseName(e.target.value)
          }
          value={newHouseName}></input>
        <button type='submit'>Submit</button>
      </form>
      <div className="d-flex flex-row flex-wrap justify-content-center column-gap-2 row-gap-2">
        {
        houses.map((house) => <div key={
            house.id
          }
          className="border border-danger-subtle p-3 rounded">
          <House name={house.name} rooms={house.rooms} deleteHouse={deleteHouse} id={house.id}/>
          <HouseUpdate name={house.name} key={house.id} id={house.id} updateHouse={updateHouse}/>
          <RoomsList house={house} key={house.id + 1} id={house.id} fetchHouses={fetchHouses}/>
        </div>)
      } </div>


    </div>
  )

}

export default HousesList;
