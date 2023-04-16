import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Form.css';
import { ChakraProvider, Button } from '@chakra-ui/react';

const Details = () => {
  let a;
  let b;

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
            <ChakraProvider>
              <div className='form-6-englishmodifird-1-parent'>
                <div className='form-6-englishmodifird-1'>
                  <img
                    className='form-6-englishmodifird-11'
                    alt=''
                    src='/form6-englishmodifird-1@2x.png'
                  />
                  {}
                  <input
                    className='address'
                    type='text'
                    placeholder='Address'
                    value={detail.fetchedAddress}
                  />
                </div>
                <input className='aadharno' value={detail.aadharNumber} />
                <input
                  className='first-middlename'
                  value={detail.firstName + ' ' + detail.middleName}
                />
                <input className='mobself' value={detail.phoneNumber} />
                {(b = detail.relativeFirstName + ' ' + detail.relativeSurname)}
                <input className='namesurnamerelative' value={b} />
                <input className='surname' value={detail.surName} />
                <input className='fmdsurname' value={detail.surName} />
                <input className='relativemob' value={detail.relativeNumber} />
                <input className='female' type='checkbox' />
                <input className='dobirth' />
                <input
                  className='aadharcheckbox'
                  type='checkbox'
                  checked={detail.aNo}
                />
                <img className='photoicon' alt='' src={detail.Photograph} />
                <input
                  className='mother'
                  type='checkbox'
                  checked={detail.mCheck}
                />
                <input
                  className='father'
                  type='checkbox'
                  value={detail.fCheck}
                />

                <input
                  className='aadharcheckbox1'
                  type='checkbox'
                  checked={detail.aCard}
                />
                <input className='firstnamefollowedbymiddlename' type='text' />
                <input className='first-name' value={a} />
                <input className='male' type='checkbox' checked='true' />
                <input
                  className='noaadhar'
                  type='checkbox'
                  checked={detail.noAadhar}
                />
                <input className='bc' type='checkbox' checked={detail.birth} />

                <Button className='btn-nx' colorScheme='blue'>
                  <Link to={`/form2/${aadharNumber}`}>Next</Link>
                </Button>
              </div>
            </ChakraProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
