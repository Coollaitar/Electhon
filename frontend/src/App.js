// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import UpdateRelative from './components/UpdateRelative';
import LoginForm from './components/LoginForm';
import UpdateAddress from './components/UpdateAddress';
import OTP from './components/OTP';
import Formcomp from './components/Formcomp';
import AfterSubmit from './components/AfterSubmit';
import LoginPage from './components/LoginPage';
import Form2 from './components/Form2';
import Address from './components/Address';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/loginform' element={<LoginForm />} />
          <Route path='/otp' element={<OTP />} />
          <Route path='/details/:aadharNumber' element={<Details />} />
          <Route path='/form/:aadharNumber' element={<Formcomp />} />
          <Route
            path='/details/:aadharNumber/relative'
            element={<UpdateRelative />}
          />
          <Route
            path='/details/:aadharNumber/address'
            element={<UpdateAddress />}
          />
          <Route path='/checkmessage' element={<AfterSubmit />} />
          <Route path='/form2/:aadharNumber' element={<Form2 />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/address' element={<Address />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
