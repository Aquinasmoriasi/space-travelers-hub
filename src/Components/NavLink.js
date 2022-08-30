import { NavLink } from 'react-router-dom';
// import Missions from './Missions/Missions';
// import Rockets from './Rockets/Rockets';
// import Profile from './Profile/Profile';

const NavLinks = () => (
  <>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/Missions">Missions</NavLink>
    <NavLink to="/Profile">Profile</NavLink>
    {/* <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes> */}
  </>
);

export default NavLinks;
