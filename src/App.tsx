import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NottAShop from './pages/NottAShop';
import EquipmentRental from './pages/EquipmentRental';
import EventTickets from './pages/EventTickets';
import Registration from './pages/Registration';
import Jobs from './pages/Jobs';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<NottAShop />} />
                        <Route path="/tickets" element={<EventTickets />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/jobs" element={<Jobs />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}


export default App;