import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OTP = () => {
  const [otp, setOtp] = useState('');
  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='otp'>OTP</label>
        <input
          type='text'
          placeHolder='OTP'
          id='otp'
          value={otp}
          onChange={handleOtpChange}
        />
      </div>
      <button>
        <Link to={'/checkmessage'}>Submit</Link>
      </button>
    </form>
  );
};

export default OTP;
