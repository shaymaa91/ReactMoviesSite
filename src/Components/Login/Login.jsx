import axios from 'axios';
import { Joi } from 'joi';
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from './../Context/UserLoggedContext';




const Login = () => {

  let [userLogged, setuserLogged] = useContext(LoggedInContext);
  console.log('loggedFlag=', userLogged);
  let [user, setUser] = useState({
    email: '',
    password: '',

  });

  const navigator = useNavigate();

  function goToHomeLoggedIn() {
    const path = '/Home';
    navigator(path);
  }

  let [frontEndErrorList, setErrorList] = useState([]);

  function getFormData(e) {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  function validateForm(e) {
    const Joi = require('joi');
    const schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });


    return schema.validate(user, { abortEarly: false });

  }


  let submitRegistrationData = (e)=> {
    e.preventDefault();
    setErrorList([]);
    let validateResult = validateForm();

    if (validateResult.error) {

      setErrorList(validateResult.error.details);


    } else {
      //set Login API
      //let {data} = await axios.post('',user);-- async at the begining of the func
      alert('you LoggedIn successffully');
      setuserLogged('true');
      goToHomeLoggedIn();
      

    }


  }



  return <>
    <div className="container px-5">
      <div className="loginform px-5 py-5">
        <h2 className='mt-5 text-center'>Login Form</h2>
        {(frontEndErrorList[0]) ?
          <div className="alert alert-danger"><ul>
            {frontEndErrorList.map((error, index) =>

              <li key={index}>{error.message}</li>

            )}
          </ul></div> : ""
        }



        <form onSubmit={submitRegistrationData} className='p-5'>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input onChange={getFormData} type="email" className="form-control" id="email" name='email' />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={getFormData} type="password" className="form-control" id="password" name='password' />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>


      </div>


    </div>


  </>

}
export default Login;
