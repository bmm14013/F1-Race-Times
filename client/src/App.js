import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import Home from "./Pages/Home";
import RaceTime from './Pages/RaceTime';

function App() {
  const [timeZone, setTimeZone] = useState('')
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home setTimeZone={setTimeZone} />} />
        <Route path="/race-time" element={<RaceTime timeZone={timeZone} />} />
      </Routes>
    </Router>
  );
}

export default App;
