import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import { LoggedInContext } from './../Context/UserLoggedContext';


export default function Navbar() {
  
  const [showNav, handleNavShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 60) {
        handleNavShow(true)
      } else handleNavShow(false);
    });
    
  }, []);

  console.log(showNav);
  return (
    <>
    

      <nav className={` navbar navbar-expand-lg fixed-top text-white ${(showNav)?style.navShow : style.navHide}`} >
        <div className="container-fluid text-white">
          <Link className="navbar-brand text-white px-1 border border-3 rounded-pill " to="#">BestMo</Link>
          <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white " aria-current="page" to="Home">Home</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="Movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="TvShows">TvShows</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="People">People</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="About">About</Link>
              </li>

            </ul>
            <ul className="navbar-nav le-auto mb-2 mb-lg-0 border-end border-light">
              <li className="nav-item">
                <Link className="nav-link text-white" to="Login"><i className='fab fa-facebook'></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="Register"><i className='fab fa-instagram'></i></Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="Register"><i className='fab fa-github'></i></Link>
              </li>
            </ul>
            <ul className="navbar-nav le-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="Register">Register</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}
