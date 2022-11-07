import axios from 'axios';
import React, { useState, useEffect } from 'react';
import style from './FetchData.module.css';
import { defaultImg, MovieImgBase, profileImgBase } from './../Request/Request';


const FetchData = props => {

    let [apiData, setData] = useState([]);
    let { url, header } = props;
    
    async function getDataFromApi() {
        let { data } = await axios.get(url);
        setData(data.results);

    }

    useEffect(() => {        

        getDataFromApi();
    }, []);

    return <div className="container px-5 py-5">
        <h1 className={`pt-5 text-center ${style.headerShadow}`}>{header}</h1>
        <div className="row pt-5">
            {(apiData.length) ? (apiData.map((movie, index) =>
                ((movie.poster_path && movie.poster_path != null) || (movie.profile_path && movie.profile_path != null)) ?
                    <div className="col-sm-6 col-md-4 col-lg-3 " key={index}>
                        <div className={`${style.card} card my-3`} >
                            <img src={(movie.poster_path) ? MovieImgBase + movie.poster_path : (movie.profile_path) ? profileImgBase + movie.profile_path : defaultImg} className={`${style.imgHight} card-img-top img-fluid`} alt={movie.title} />
                        </div>

                    </div> : ""


            )) : (
                <div className='d-flex justify-content-center align-items-center vh-100 fs-1'>
                    <h2><i className='fas fa-spinner fa-spin text-xl-start fs-1'></i></h2>

                </div>)}
        </div>
    </div>;


}

export default FetchData;