import React from "react";

// variable that holds the mockapi to use for houses api
const HOUSES_API = 'https://6509e97bf6553137159c3d6c.mockapi.io/houses';

// Creates class for API methods to be used in CRUD app
class HousesApi {
  // Using async on each CRUD method(get, put, post, delete). Async will then await the response of each fetch method and then either return the data or the response to be used in a later component
  get = async () => {
    try {
      const resp = await fetch(HOUSES_API);
      const data = await resp.json();
      return data
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
  post = async(newHouse) => {
    try {
      const resp = await fetch(HOUSES_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newHouse)
      });
      return await resp.json()
    } catch(e) {
      console.log('There was an error with fetch POST', e)
    }
  }
  delete = async(id) => {
    try {
      const resp = await fetch(`${HOUSES_API}/${id}`, {
            method: 'DELETE'
          });
      return await resp.json();
    } catch(e) {
      console.log('There was an error with your DELETE method', e)
    }
    
  }
}

// creates a varialbe to export and use an instance of each house api method
export const housesApi = new HousesApi();