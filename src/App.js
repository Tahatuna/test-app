import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Tutors from './components/pages/Tutors/Tutors'
import pupilLogo from './components/img/pupil-logo.png'
import NavbarButtons from './components/pages/Navbar/NavbarButtons';
import SigninModal from './components/user-actions/login-register/SigninModal';
import SignupModal from './components/user-actions/login-register/SignupModal';
import UserProfile from './components/user-actions/user-menu/UserProfile';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/pages/Home/Home';


function App() {

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("userId");
    if (data !== null) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);


  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="home">
              <img src={pupilLogo} className="logo ms-4" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="#">FIND TUTORS</a> */}
                  <Link className='nav-link' to="tutors">FIND TUTORS</Link>
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
              {theme === false ? <NavbarButtons /> : <UserProfile />}
            </div>
          </div>
        </nav>
        {/* <Header />
          
            <HomeCategory /> */}
        <Routes>
          <Route exact path="/home" element={<Home />}> </Route>
          <Route path="/tutors" element={<Tutors />}></Route>
        </Routes>

        {/* *** */}

        {/* *** */}

        <SigninModal />
        <SignupModal />

      </Router>
    </>

  );
}

export default App;
