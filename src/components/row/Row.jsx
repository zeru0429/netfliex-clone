import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./row.css";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isposter }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 500; // Adjust this value to control the scroll distance

  const scrollLeft = () => {
  const row = document.getElementById("row");
  if (row) {
    row.scrollLeft -= scrollAmount;
    setScrollPosition(row.scrollLeft);
  }
  };

const scrollRight = () => {
  const row = document.getElementById("row");
  if (row) {
    row.scrollLeft += scrollAmount;
    setScrollPosition(row.scrollLeft);
  }
};


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    heighr: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
    }else {
      movieTrailer(movie?.title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      })
      .catch((error) => console.log(error))
    }
  }
 return (
  <div className="row">
    <h2>{title}</h2>
    <div className="row__buttons">
      <button className="scroll-button" onClick={scrollLeft}>
        &lt;
      </button>
      <button className="scroll-button" onClick={scrollRight}>
        &gt;
      </button>
    </div>
    <div className="row__posters" id="row">
      {movies.map((movie) => (
        <img
          key={movie.id}
          onClick={() => handleClick(movie)}
          className={`row__poster ${isposter && "row__posterLarge"}`}
          src={`${base_url}${
            isposter ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))}
    </div>
    <div style={{ padding: "40px" }}>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  </div>
);
}

export default Row;