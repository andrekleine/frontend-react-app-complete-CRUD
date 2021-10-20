import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-light meus-favoritos" style={{display: "flex", justifyContent:"center"}}>
      <Link to="/Home" style={{textDecoration:"none", color:"white"}}>
        <h2>Meus Favoritos</h2>
      </Link>
    </nav>
  );
};

export default Navbar;
