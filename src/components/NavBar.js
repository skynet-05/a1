import React from 'react';
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      // <div className="navbar">
      //   <div className="navbar-container">
      //     <div className="navbar-logo">
      //       <img src="src/assests/images/logo.svg" alt="logo" />
      //     </div>
      //     <div className="navbar-links">
      //       <a href="#home">Home</a>
      //       <a href="#about">About</a>
      //       <a href="#contact">Contact</a>
      //     </div>
      //   </div>
      // </div>

      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#h">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#h">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#h">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#h">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    );
  }
}

export default NavBar;