import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import Movies from '../Movies/Movies';
import TvShows from '../TvShows/TvShows';
import People from './../People/People';
import Login from './../Login/Login';
import Register from './../Register/Register';
import About from './../About/About';
import Footer from '../Footer/Footer';
import Notfound from './../Notfound/Notfound';
import HomeLoggedIn from './../HomeLoggedIn/HomeLoggedIn';
import { LoggedInContext } from './../Context/UserLoggedContext';





function App() {
  let [userLogged, setuserLogged] = useState('false');


  return (
    <>

      <Navbar />
      <LoggedInContext.Provider value={[userLogged, setuserLogged]}>
        <Routes>

          {(userLogged == 'false') ? <Route path="/" element={<Home />}></Route> :
            <Route path="/" element={<Home />}></Route>
          }

          {(userLogged == 'false') ? <Route path="Home" element={<Home />} ></Route> :
            <Route path="Home" element={<HomeLoggedIn />} ></Route>
          }



          <Route path="Movies" element={<Movies />}  ></Route>

          <Route path="TvShows" element={<TvShows />} ></Route>
          <Route path="People" element={<People />}   ></Route>
          <Route path="Login" element={<Login />}     ></Route>
          <Route path="Register" element={<Register />}  ></Route>
          <Route path="About" element={<About />}        ></Route>
          <Route path="*" element={<Notfound />}></Route>

        </Routes>
      </LoggedInContext.Provider>
      <Footer />


    </>
  );
}

export default App;
