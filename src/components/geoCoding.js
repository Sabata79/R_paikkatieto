import React, { useState } from "react";
import axios from "axios";

const API_URL = 'https://geocoding-api.open-meteo.com/v1/'

export default function Geocoding() {

  const [searchInput, setSearchInput] = useState('');
  const [rows, setRows] = useState([]);

  const fetcData = (e) => {
    e.preventDefault()

    const addres = API_URL +
      'search?name=' + searchInput;

    console.log(addres)

    axios.get(addres)
      .then((response) => {
        console.log(response.data.results);
        setRows(response.data.results);
      }).catch(error => {
        alert(error);
      });
  }

  return (
    <div>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
      <button className="btn btn-dark" onClick={(e) => fetcData(e)} type='button'>Etsi</button>

      <table className="table">
        <tbody>
          <tr className="tittles">
            <th>Kaupunki</th>
            <th>Kunta</th>
            <th>Maa</th>
            <th>Leveysaste</th>
            <th>Pituusaste</th>
            <th>Merenpinnasta</th>
            <th>Väkiluku</th>
          </tr>
          {rows.map(item => (
            <tr key={item.id}>
              <td >{item.name}</td>
              <td>{item.admin1}</td>
              <td>{item.country}</td>
              <td >{item.latitude.toFixed(3)}</td>
              <td>{item.longitude.toFixed(3)}</td>
              <td>{item.elevation + ' m'}</td>
              <td>{item.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}