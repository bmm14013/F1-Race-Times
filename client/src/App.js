import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Pages/Home";
import RaceTime from './Pages/RaceTime';
import Standings from './Pages/Standings';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/race-time"> Race Times </Link>
        <Link to="/standings"> Standings </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/race-time" element={<RaceTime/>} />
        <Route path="/standings" element={<Standings/>} />
      </Routes>
    </Router>
  );
}

export default App;
