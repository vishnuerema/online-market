import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton';
import Footer from './footer'
import Navbar from './Navbar'

class Viewcart extends Component {
constructor(){
  super()
  this.state = {
    loaded: false
  }
}

  render () {
  if(this.state.loaded) {
      return (
        <div className = "common_cartview">
        <Navbar />
         
        <Footer />
        </div>
      )
              } else return (<div> <Skeleton circle={true} animation="wave" count={10} /> </div>)
  }
}

export default Viewcart
