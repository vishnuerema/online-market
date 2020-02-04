import React, { Component } from 'react'
import Navbar from './Navbar'
import Banner from './banner'
import Product from './product'
import Footer from './footer'

class Home extends Component {
  render () {
    return (
      <div className = "common_home">
        <Navbar />
    	  <Banner />
    	  <Product />
    	  <Footer />
      </div>
    	
    )
  }
}

export default Home
