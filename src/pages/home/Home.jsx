import React from 'react'
import './home.css'
//request 
import request from '../../request'
import axios from '../../axios'

//component
import Row from '../../components/row/Row'
import Banner from '../../components/banner/Banner'

const Home = () => {
  return (
    <div className='row'>
      <Banner fetchUrl={request.fetchAnimationMovies} />
      <Row isposter={true} fetchUrl={request.fetchNetflixOriginals} title='NETFLIX ORIGINALS'/>
      {/* <Row isposter={true} fetchUrl={request.fetchUpcomming} title='Up comming Movies'/>
      <Row isposter={false} fetchUrl={request.fetchTrending} title='Trending Now'/>
      <Row isposter={false} fetchUrl={request.fetchTopRatedMovies} title='Top Rated'/>
      <Row isposter={false} fetchUrl={request.fetchActionMovies} title='Action Movies'/>
      <Row isposter={false} fetchUrl={request.fetchComedyMovies} title='Comedy Movies'/>
      <Row isposter={false} fetchUrl={request.fetchHorrorMovies} title='Horror Movies'/>
      <Row isposter={false} fetchUrl={request.fetchRomanceMovies} title='Romance Movies'/> 
      <Row isposter={false} fetchUrl={request.fetchDocumentaries} title='Documentaries Movies'/> */}
    </div>
  )
}

export default Home