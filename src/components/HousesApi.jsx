import React from "react";

const HOUSES_API = 'https://6509e97bf6553137159c3d6c.mockapi.io/houses';

class HousesApi {
  get = async () => {
    try {
      const resp = await fetch(HOUSES_API);
      const data = await resp.json();
      return data;
    } catch(e) {
      console.log('There was an error fetching GET data', e)
    }
  }
  put = async(id, house) => {
    try {
      const resp = await fetch(`${HOUSES_API}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(house)
      });
      return await resp.json();
    } catch(e) {
      console.log('There was a problem with PUT method', e)
    }
  }
}

export const housesApi = new HousesApi();