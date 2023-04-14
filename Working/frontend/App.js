// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import UpdateRelative from './components/UpdateRelative';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/details/:aadharNumber' element={<Details />} />
          <Route
            path='/details/:aadharNumber/relative'
            element={<UpdateRelative />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
