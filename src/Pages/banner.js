import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import images1 from '../images/banner1.png'
import images2 from '../images/banner2.png'
import images3 from '../images/banner3.png'
import images4 from '../images/banner4.png'
class Banner extends Component {
  render () {
    const options = {
      items: 1,
      nav: true,
      rewind: true,
      autoplay: true,
      slideBy: 1,
      dots: false,
      dotsEach: true,
      dotData: true
    }
    return (
      <div className='banner_cmn'>
        <OwlCarousel className='owl-theme' {...options}>
          <div className='item'>
            <img className='img-fluid ban_img' src={images1} alt="no-img" />
          </div>
          <div className='item'>
            <img className='img-fluid ban_img' src={images2} alt="no-img" />
          </div>
          <div className='item'>
            <img className='img-fluid ban_img' src={images3} alt="no-img" />
          </div>
          <div className='item'>
            <img className='img-fluid ban_img' src={images4} alt="no-img" />
          </div>
        </OwlCarousel>
      </div>
    )
  }
}

export default Banner
