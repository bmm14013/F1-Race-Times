import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Pages/Home";
import RaceTime from './Pages/RaceTime';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/race-time" element={<RaceTime />} />
      </Routes>
    </Router>
  );
}

export default App;
