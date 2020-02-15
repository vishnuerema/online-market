import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton';
import Footer from './footer'
import Navbar from './Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Viewproduct extends Component {
constructor(props){
  super(props)
  this.state = {
    data: [],
    loaded: false,
    path: this.props.match.params.id
  }
  
}
 componentDidMount () {
  fetch('http://localhost/vishnue/Deals_of_market/public/viewproduct_data',{
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state.path)
  }).then(res => res.json())
  .then(response => {
      })
      .catch(error =>{
          console.log(error)
      })

    fetch('http://localhost/vishnue/Deals_of_market/public/welcome').then(res => res.json())
      .then(response => {
        this.setState({
            data: response[1].map(c => {
            for(var i in c) {
                if(c[i] != null && (c[i][0] === '{' || c[i][0] === '[')) c[i] = JSON.parse(c[i])
            }
            return c;
            }),
          loaded: true
        })
      })
  }

  render () {
    
    const { data } = this.state
    if(this.state.loaded) {
        return (
          <div className = "common_cartview">
          <Navbar />
            <div className='product_cart'>
            <Carousel className="Viewproduct_carosuel">
            {data.map((val,index) => ( 
                  <div  key={index} className="Viewproduct_imgdiv">
                      <img  className='img-fluid view_cart_imgs' src={val.home_product_images[0]} alt="no-img" />
                  </div>
              ))}
              </Carousel>
              <div className="Viewproduct_imgdetail">
                 hi hi hi
              </div>
            </div>
          <Footer />
          </div>
        )
                } else return (<div> <Skeleton circle={true} animation="wave" count={10} /> </div>)
    }
}

export default Viewproduct
