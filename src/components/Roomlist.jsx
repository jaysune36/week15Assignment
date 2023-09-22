import React, {useState} from 'react'
import { housesApi } from './HousesApi';  
import Room from './Room';

export default function RoomsList (props) {
  const [roomName, setRoomName] = useState('');
  const [roomArea, setRoomArea] = useState(0);
  const [ idCount, setIdCount ] = useState(0)
  let rooms = [];

  const addRoom = async(e) => {
    e.preventDefault();
    await housesApi.put(props.id,{ rooms: [...props.house.rooms, {roomName, roomArea, 'id': idCount}]});
    props.fetchHouses();
    setIdCount(prevId => prevId + 1)
    setRoomArea('');
    setRoomName('');
  }

  if(props) {
    props.house.rooms.map((room, index)=>{
      rooms.push(<Room house={props.house} key={index} id={room.id} name={room.roomName} area={room.roomArea} fetchHouses={props.fetchHouses}/>);
    })
  }
  
  return (
    <div className='border border-primary rounded mt-2 p-1'>
      <h4>Rooms</h4>
      <ul>
      {rooms}
    </ul>
    <form className='room-forms border-top p-2 border-primary-subtle mb-2' onSubmit={addRoom}>
      <label>Room Name: </label>
      <input type='text' placeholder='Room Name' onChange={(e)=>{setRoomName(e.target.value)} }value={roomName}></input>
      <label>Room Area: </label>
      <input type='number' placeholder='Room Area' onChange={(e)=>{setRoomArea(e.target.value)}} value={roomArea}></input>
      <button type='submit' className='btn btn-primary'>Add Room</button>
    </form>
    </div>
    
  )
}