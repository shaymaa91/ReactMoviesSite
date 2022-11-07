import axios from 'axios';
import { Joi } from 'joi';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


 
const Register=()=> {

  const navigator = useNavigate();

  function goToLogin() {
    const path = '/Login';
    navigator(path);
  }

  let [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',

  });

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
      first_name: Joi.string().alphanum().min(3).max(30).required(),
      last_name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });


    return schema.validate(user, { abortEarly: false });

  }


  function submitRegistrationData(e) {
    e.preventDefault();
    setErrorList([]);
    let validateResult = validateForm();

    if (validateResult.error) {

      setErrorList(validateResult.error.details);


    } else {
      //set register API
      //let {data} = await axios.post('',user);-- async at the begining of the func
      alert('you registered successffully');
      goToLogin();

    }


  }



  return <>
      <div className="container px-5">
        <h2 className='mt-5 text-center mb-5'>Registeration Form</h2>
        <div className="container px-5">
          {(frontEndErrorList[0]) ?
            <div className="alert alert-danger"><ul>
              {frontEndErrorList.map((error, index) =>

                <li key={index}>{error.message}</li>

              )}
            </ul></div> : ""
          }
        </div>


        <form onSubmit={submitRegistrationData} className='px-5 py-5'>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="first_name" className="form-label">First Name</label>
              <input onChange={getFormData} type="first_name" className="form-control" id="first_name" name='first_name' />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="last_name" className="form-label">Last Name</label>
              <input onChange={getFormData} type="last_name" className="form-control" id="last_name" name='last_name' />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-6 ">
              <label htmlFor="email" className="form-label">Email address</label>
              <input onChange={getFormData} type="email" className="form-control" id="email" name='email' />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input onChange={getFormData} type="password" className="form-control" id="password" name='password' />
            </div>
          </div>


          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>


    </>
  
}
export default Register;
