import React, { Component } from 'react'
import Navbar from './Navbar'
import Banner from './banner'
import Dealsoftheday from './Dealsoftheday'
import Allproduct from './Allproduct'
import Footer from './footer'

class Home extends Component {

  render () {
    return (
      <div className = "common_home">
        <Navbar />
    	  <Banner />
    	  <Dealsoftheday />
        <Allproduct />
    	  <Footer />
      </div>
    	
    )
  }
}

export default Home
