import React, { useContext, useState } from 'react'
import './Style.css';
import logo from './img/pupil-logo.png';
import NavbarButtons from './user-actions/NavbarButtons';
import SigninModal from './user-actions/login-register/SigninModal';
import SignupModal from './user-actions/login-register/SignupModal'
import UserContext from './context/UserContext';
import UserProfile from './user-actions/user-menu/UserProfile';

function Navbar({ }) {

  const data = useContext(UserContext)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo ms-4" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">FIND TUTORS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">RESOURCES</a>
              </li>
            </ul>
          </div>
          <div>
            {data.theme === false ? <NavbarButtons /> : <UserProfile />}
          </div>
        </div>
      </nav>
      <SigninModal />
      <SignupModal />
    </div>
  )
}

export default Navbar
