import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Details = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async (aadharNumber = '123') => {
      try {
        const res = await axios.get(
          `http://localhost:8800/details/${aadharNumber}`
        );
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div>
      <div>
        {details.map((detail) => (
          <div key={detail.aadharNumber}>
            <h1>Details</h1>
            {detail.Photograph && <img src={detail.Photograph} alt='' />}
            <h2>{detail.firstName}</h2>
            <h2>{detail.lastName}</h2>
            <h2>{detail.middleName}</h2>
            <h2>{detail.surName}</h2>
            <h2>{detail.relativeName}</h2>
            <h2>{detail.relativeSurname}</h2>
            <h2>{detail.Gender}</h2>
            <h2>{detail.phoneNumber}</h2>
            <h2>{detail.typeofRelation}</h2>
            <h2>{detail.Address}</h2>

            <h2>{detail.DOB}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
