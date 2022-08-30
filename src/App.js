import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Rockets from './Components/Rockets/Rockets';
import Missions from './Components/Missions/Missions';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
