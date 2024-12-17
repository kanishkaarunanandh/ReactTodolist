import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import Login from './components/Login'
import Signup from './components/Signup';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Users() {
  const [user, setuser] = useState([
    
  ])
  return (
    <BrowserRouter>
      <Link to={"/Login"}></Link>
      <Link to={"/Signup"}></Link>
      <Link to={"/App"}></Link>
      <Routes>
        <Route path='/Login' element={<Login user={user} setuser={setuser} />}></Route>
        <Route path='/Signup' element={<Signup user={user} setuser={setuser} />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
        <Route path='/App' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  )

}
root.render(
  <div>

  <Users></Users>
  </div>
);

