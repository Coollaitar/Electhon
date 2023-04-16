import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Address() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    // Query 1: fetch address form epic for AGE<18
    axios
      .get('http://localhost:8800/query1/124')
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Query 2: fetch address form passport for AGE>18
    axios
      .get('http://localhost:8800/query2/12')
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Query 3: fetch address form rationcard when mobile is not linked with aadhar
    axios
      .get('/query3/123456789012')
      .then((response) => {
        setData3(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Query 1:</h2>
      <ul>
        {data1.map((item) => (
          <li key={item.Address}>{item.Address}</li>
        ))}
      </ul>

      <h2>Query 2:</h2>
      <ul>
        {data2.map((item) => (
          <li key={item.Address}>{item.Address}</li>
        ))}
      </ul>

      <h2>Query 3:</h2>
      <ul>
        {data3.map((item) => (
          <li key={item.Address}>{item.Address}</li>
        ))}
      </ul>
    </div>
  );
}

export default Address;
