import React from 'react'
import './home.css'
//request 
import requests from '../../request'
import axios from '../../axios'
import { BrowserRouter,Link,useNavigate } from 'react-router-dom'
//component
import Row from '../../components/row/Row'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Home2 = () => {
  const navigate=useNavigate();
  return (
    <div className='row'>
      <Banner fetchUrl={requests.fetchAnimationMovies} />
      <Row isposter={false} fetchUrl={requests.fetchHorrorMovies} title='Horror Movies'/>
      <Row isposter={false} fetchUrl={requests.fetchRomanceMovies} title='Romance Movies'/>
      <Row isposter={false} fetchUrl={requests.fetchDocumentaries} title='Documentaries'/>
      <Row isposter={false} fetchUrl={requests.fetchPlayknow} title='Now Playing Movies'/>
      <Row isposter={false} fetchUrl={requests.fetchPopularMovies} title='Popular Movies'/>
      <Row isposter={false} fetchUrl={requests.fetchNowPlayingMovies} title='Now Playing Movies'/>
      <Row isposter={false} fetchUrl={requests.fetchUpcomingMovies} title='Upcoming Movies'/>
      <Link to ='/'><DoubleArrowIcon /></Link>

    </div>
  )
}

export default Home2