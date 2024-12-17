import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    const [user, setUser] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login user={user} />} />
                <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

root.render(<Main />);
