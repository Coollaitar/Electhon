import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../index.css';
const UpdateAddress = () => {
  const [details, setDetails] = useState({
    Address: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const aadharNumber = location.pathname.split('/')[2];
  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault(); //no refresh
    try {
      await axios.put(
        `http://localhost:8800/details/${aadharNumber}/add`,
        details
      );
      navigate(`/details/${aadharNumber}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='form'>
      <h1>Update Relative Details</h1>
      <input
        type='text'
        placeholder='Address'
        onChange={handleChange}
        name='Address'
      />
      <button onClick={handleClick}>Update Address</button>
    </div>
  );
};

export default UpdateAddress;
