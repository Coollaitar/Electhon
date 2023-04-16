import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Details.css';
const Details = () => {
  let a;
  const { aadharNumber } = useParams();
  const [details, setDetails] = useState([]);
  const fetchDetails = async (aadharNumber) => {
    try {
      const res = await axios.get(
        `http://localhost:8800/details/${aadharNumber}`
      );
      setDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDetails(aadharNumber);
  }, [aadharNumber]);

  return (
    <div>
      <div>
        {details.map((detail) => (
          <div key={detail.aadharNumber}>
            {(a = detail.firstName + ' ' + detail.middleName)}
            <div className='vid-parent'>
              <img className='vid-icon' alt='' src='/vid@2x.png' />
              <input
                className='name'
                type='text'
                value={
                  detail.firstName +
                  ' ' +
                  detail.middleName +
                  ' ' +
                  detail.surName
                }
              />
              <input
                className='fname'
                type='text'
                value={detail.relativeFirstName + ' ' + detail.relativeSurname}
              />
              <input className='dob' type='text' value={detail.DOB} />
              <img
                className='photo-icon'
                alt=''
                src={detail.Photograph}
                value={detail.Gender}
              />
              <input className='sex' type='text' value={detail.Gender} />
            </div>
            {/* <button className='upd'>
              <Link to={`/details/${aadharNumber}/relative`}>Update</Link>
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
