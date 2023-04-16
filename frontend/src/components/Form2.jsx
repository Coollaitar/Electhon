import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import './Form2.css';
const Form2 = () => {
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
            <ChakraProvider>
              <div className='rectangle-parent'>
                <div className='frame-child' />
                <img
                  className='form-6-english-2-11'
                  alt=''
                  src='/form6-english2-1@2x.png'
                />
                <input
                  className='relwithappl'
                  type='text'
                  value={detail.typeofRelation}
                />
                <input
                  className='nffm'
                  type='text'
                  value={
                    detail.relativeFirstName + ' ' + detail.relativeSurname
                  }
                />
                <input
                  className='epic'
                  type='text'
                  value={detail.realtiveEPICNum}
                />

                <input
                  className='aadharcbfor2f'
                  type='checkbox'
                  checked={detail.aadharC}
                />
                <input
                  className='psport'
                  type='checkbox'
                  checked={detail.pPort}
                />
                <input
                  className='passbook'
                  type='checkbox'
                  checked={detail.passBook}
                />
                <Button className='db' colorScheme='blue'>
                  <Link to={`/details/${aadharNumber}`}> Submit</Link>
                </Button>
              </div>
            </ChakraProvider>
            {/* <button className='upd'>
              <Link to={`/details/${aadharNumber}/relative`}>Update</Link>
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form2;
