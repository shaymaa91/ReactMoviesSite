import React, { useState, useEffect } from 'react';
import FetchData from './../FetchData/FetchData';
import {API_KEY,baseURL} from './../Request/Request';



const TvShows=() =>{
  
  let url_element = 'tv';
  let TvShowsURL = `${baseURL}/${url_element}/day?api_key=${API_KEY}`;
  
  return(
  <FetchData url= {TvShowsURL} header={"Trending TV Shows"} />
  );
}

export default  TvShows;