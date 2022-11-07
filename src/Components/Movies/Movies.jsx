import React, { useState, useEffect } from 'react';
import FetchData from './../FetchData/FetchData';
import {API_KEY,baseURL} from './../Request/Request';




const Movies = () => {

  let url_element = 'movie';
  let trendingMoviesURL = `${baseURL}/${url_element}/day?api_key=${API_KEY}`;
  return (
    <FetchData url={trendingMoviesURL} header={"Trending Movies"} />
  );
}

export default Movies;