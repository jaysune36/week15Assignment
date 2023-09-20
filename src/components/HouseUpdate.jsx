import React, {useState} from "react";

function HouseUpdate(props) {
  const [updateHouseName, setUpdateHouseName] = useState('');

  return(
    <form>
      <label>New House Name: </label>
      <input type='text' placeholder='New House Name' onChange={(e)=>setUpdateHouseName(e.target.value)}></input>
      <button type='submit' onClick={(e)=>props.updateHouse(e, props.id, {
        name: updateHouseName
      })}>Save</button>
    </form>
  )
}

export default HouseUpdate;