import React, {useState} from 'react'
import { housesApi } from './HousesApi';  
import Room from './Room';

export default function RoomsList (props) {
  const [roomName, setRoomName] = useState('');
  const [roomArea, setRoomArea] = useState(0);
  let rooms = [];

  const addRoom = async(e) => {
    console.log(roomName, roomArea)
    e.preventDefault();
    await housesApi.put(props.id,{ rooms: [...props.house.rooms, {roomName, roomArea}]});
    props.fetchHouses()
    setRoomArea('');
    setRoomName('');
  }

  if(props) {
    props.house.rooms.map((room, index)=>{
      rooms.push(<Room key={index} name={room.roomName} area={room.roomArea}/>)
    })
  }
  
  return (
    <div>
      <ul>
      {rooms}
    </ul>
    <form className='room-forms' onSubmit={addRoom}>
      <label>Room Name: </label>
      <input type='text' placeholder='Room Name' onChange={(e)=>{setRoomName(e.target.value)} }value={roomName}></input>
      <label>Room Area: </label>
      <input type='number' placeholder='Room Area' onChange={(e)=>{setRoomArea(e.target.value)}} value={roomArea}></input>
      <button type='submit'>Add Room</button>
    </form>
    </div>
    
  )
}