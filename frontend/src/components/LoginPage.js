import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  ChakraProvider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

// const file1 = require('C:/Users/adity/Desktop/electhosn/sms/index.js');
//C:\Users\adity\Desktop\electhon\sms\index.js

// function sendsms(){
//     const accountSid = "ACe2a9003302f9bdff9a9bc259dbf03399";
//     const authToken = "83d4ef12b7276d0b80b65550cc136dd8";
//     const client = require("twilio")(accountSid, authToken);
//     client.messages
//       .create({ body: "Aadit Kisanrao Palande , your VoterID registration has started. click on http://localhost:3000/form/123", from: "+15075686894", to: "+918355983607" })
//       .then(message => console.log(message.sid));
//     }

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [error, setError] = useState('');

  const handleMobileNumberSubmit = () => {
    // Perform mobile number validation and OTP sending logic here
    // For demonstration purposes, we are assuming the OTP is sent successfully
    setShowOtpField(true);
    setError('');
  };

  const handleOtpSubmit = () => {
    // Perform OTP validation logic here
    // For demonstration purposes, we are assuming the OTP is correct
    console.log('hi');
  };

  return (
    <ChakraProvider>
      <div className='css-ipeil2'>
        <Box borderWidth='2px' maxW='md' p={4}>
          <FormControl mb={4}>
            <FormLabel htmlFor='mobileNumber'>Mobile Number</FormLabel>
            <Input
              id='mobileNumber'
              type='tel'
              placeholder='Enter mobile number'
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </FormControl>
          {showOtpField && (
            <FormControl mb={4}>
              <FormLabel htmlFor='otp'>OTP</FormLabel>
              <Input
                id='otp'
                type='text'
                placeholder='Enter OTP'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </FormControl>
          )}
          {error && (
            <Alert status='error' mb={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
          {!showOtpField ? (
            <Button colorScheme='blue' onClick={handleMobileNumberSubmit}>
              Submit
            </Button>
          ) : (
            <Button colorScheme='blue' onClick={handleOtpSubmit}>
              <Link to={'./form/123'}>Submit OTP</Link>
            </Button>
          )}
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default LoginPage;
