import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Skeleton from 'react-loading-skeleton';

class Product extends Component {
constructor(){
  super()
  this.state = {
    data: [],
    loaded: false
  }
}
 componentDidMount () {
    fetch('http://localhost/vishnue/Deals_of_market/public/welcome').then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({
          data: response,
          loaded: true
        })
      })
  }

  render () {
    const options = {
      rewind: true,
      autoplay: true,
      slideBy: 1,
      dots: false,
      margin:0,
      autoplayTimeout:1500,
      nav: true,
      loop:true,
      responsive:{
        0:{
            items:1,
        },
        576:{
            items:3,
        },
        767:{
            items:4,
            nav: true,
        },
        1000:{
            items:6,
            nav: true,
        },
        1400:{
            items:7,
            nav: true,
        }
    }
  }
  const { data } = this.state
  if(this.state.loaded) {
      return (
        <div className='product_cmn'>
        <div className='product_head'>
        <p className='product_hed_txt'>Deal of the day</p>
        <Link className='viewall_btn' to='/'>view all</Link>
        </div>
          <OwlCarousel className='owl-theme' {...options}>
              {data.map((val,index) => ( 
                  <div key={index} className='item'>
                  <Link  to="/" className='product_a'>
                    <div  className='products_img_txt'>
                        <div className='products_img'>
                          <img  className='img-fluid prodct_img' src={JSON.parse(val.home_product_images)[0]} alt="no-img" />
                        </div>
                        <div  className='products_detail'>
                          <p  className='prod_name' >{val.home_product_name}</p>
                            <p className='prod_dict'>{val.home_product_amount.cost}</p>
                          <p className='prod_saving'></p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </OwlCarousel>
        </div>
      )
              } else return (<div> <Skeleton circle={true} animation="wave" count={10} /> </div>)
  }
}

export default Product
