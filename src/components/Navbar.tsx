import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav-links">
      <NavLink to="/yoga">
        <img src="img/hugeicons--yoga-mat.svg" alt="Yoga Icon" />
      </NavLink>

      <NavLink to="/meditation">
        <img
          src="img/ph--flower-lotus-bold.svg"
          alt="Meditate Icon"
        />
      </NavLink>

      <NavLink to="/home">
        <img
          src="img/solar--home-smile-bold-2.svg"
          alt="Home Icon"
        />
      </NavLink>

      <NavLink to="/music">
        <img
          src="img/solar--music-note-bold.svg"
          alt="Music Icon"
        />
      </NavLink>

      <NavLink to="/profile">
        <img src="img/gg--profile.svg" alt="Profile Icon" />
      </NavLink>
    </ul>
  );
}

export default Navbar;
