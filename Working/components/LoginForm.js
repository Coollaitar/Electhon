import { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
function LoginForm() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Mobile Number: ${mobileNumber} | OTP: ${otp}`);
    // You can send the data to the server or perform any other action here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='mobileNumber'>Mobile Number</label>
        <input
          type='tel'
          id='mobileNumber'
          placeholder='Phone Number'
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
      </div>
      <button>
        <Link to={'/otp'}>Submit</Link>
      </button>
    </form>
  );
}

export default LoginForm;
