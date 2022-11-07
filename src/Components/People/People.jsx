import React, { useState, useEffect } from 'react';
import FetchData from './../FetchData/FetchData';
import {API_KEY,baseURL} from './../Request/Request';



const People=() =>{
  
  let url_element = 'person';
  let trendingPeopleURL = `${baseURL}/${url_element}/day?api_key=${API_KEY}`;

  return(
  <FetchData url= {trendingPeopleURL} header={"Trending People"} />
  );
}

export default  People;