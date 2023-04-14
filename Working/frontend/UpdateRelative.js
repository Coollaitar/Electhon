import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../index.css';
const UpdateRelative = () => {
  const [details, setDetails] = useState({
    relativeFirstName: '',
    relativeSurname: '',
    realtiveNumber: '',
    typeofRelation: '',
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
        `http://localhost:8800/details/${aadharNumber}/relativeUpdate`,
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
        placeholder='First Name'
        onChange={handleChange}
        name='relativeFirstName'
      />
      <input
        type='text'
        placeholder='Surname'
        onChange={handleChange}
        name='relativeSurname'
      />
      <input
        type='text'
        placeholder='Phone Number'
        onChange={handleChange}
        name='realtiveNumber'
      />
      <input
        type='text'
        placeholder='Type of Relation'
        onChange={handleChange}
        name='typeofRelation'
      />
      <button onClick={handleClick}>Updates</button>
    </div>
  );
};

export default UpdateRelative;
