import React, { useEffect,useState} from 'react'
import './banner.css'
import axios from '../../axios';


const Banner = ({fetchUrl}) => {
    const [movie,setMovie] =useState([]);
        
    useEffect(()=>{
        fetch()
    },[])


    fetch=async ()=>{
        const response = await axios.get(fetchUrl);
        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])

    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <div className="banner" style={
        {backgroundImage: `url(${base_url2}${movie.poster_path})`}}>
        <h1  className="title">{movie.title}</h1>
        <h6>{truncate(movie?.overview, 150)}</h6>
        <div className="buttoncontainer">
            <button>Play</button>
            <button>My list</button>
        </div>
        <div className="fadeBottom"></div>

    </div>
  )
}

export default Banner