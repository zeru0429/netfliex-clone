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

      <Banner fetchUrl={request.fetchNetflixOriginals} />
      {/* <Row /> */}
     
    </div>
  )
}

export default Home