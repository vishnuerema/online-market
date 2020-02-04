import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import images1 from '../images/clock.jpeg'
import images2 from '../images/redmi8a.jpeg'
import images3 from '../images/saree.jpeg'
import images4 from '../images/shoe1.jpeg'
import images6 from '../images/toy1.jpeg'
import images7 from '../images/watch.jpeg'
import images8 from '../images/watch.jpeg'
class Product extends Component {
  render () {
    const options = {
      rewind: true,
      autoplay: true,
      slideBy: 1,
      dots: false,
      margin:0,
      autoplayTimeout:1500,
      nav: true,
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
            loop:true
        },
        1400:{
            items:7,
            nav: true,
            loop:true,
        }
    }
  }
    return (
      <div className='product_cmn'>
      <div className='product_head'>
      <p className='product_hed_txt'>Deal of the day</p>
      <Link className='viewall_btn' to='/'>view all</Link>
      </div>
        <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
              <Link to="/" className='product_a'>
                <div className='products_img_txt'>
                    <div className='products_img'>
                      <img className='img-fluid prodct_img' src={images1} alt="no-img" />
                    </div>
                    <div className='products_detail'>
                      <p className='prod_name'>Sarees</p>
                      <p className='prod_dict'>Extra 10% off</p>
                      <p className='prod_saving'>Great Savings!</p>
                  </div>
                </div>
              </Link>
            </div>
             <div className='item'>
              <Link to="/" className='product_a'>
                <div className='products_img_txt'>
                    <div className='products_img'>
                      <img className='img-fluid prodct_img' src={images2} alt="no-img" />
                    </div>
                    <div className='products_detail'>
                      <p className='prod_name'>Sarees</p>
                      <p className='prod_dict'>Extra 10% off</p>
                      <p className='prod_saving'>Great Savings!</p>
                  </div>
                </div>
              </Link>
            </div>
             <div className='item'>
              <Link to="/" className='product_a'>
                <div className='products_img_txt'>
                    <div className='products_img'>
                      <img className='img-fluid prodct_img' src={images3} alt="no-img" />
                    </div>
                    <div className='products_detail'>
                      <p className='prod_name'>Sarees</p>
                      <p className='prod_dict'>Extra 10% off</p>
                      <p className='prod_saving'>Great Savings!</p>
                  </div>
                </div>
              </Link>
            </div>
             <div className='item'>
              <Link to="/" className='product_a'>
                <div className='products_img_txt'>
                    <div className='products_img'>
                      <img className='img-fluid prodct_img' src={images4} alt="no-img" />
                    </div>
                    <div className='products_detail'>
                      <p className='prod_name'>Sarees</p>
                      <p className='prod_dict'>Extra 10% off</p>
                      <p className='prod_saving'>Great Savings!</p>
                  </div>
                </div>
              </Link>
            </div>
             <div className='item'>
              <Link to="/" className='product_a'>
                <div className='products_img_txt'>
                    <div className='products_img'>
                      <img className='img-fluid prodct_img' src={images6} alt="no-img" />
                    </div>
                    <div className='products_detail'>
                      <p className='prod_name'>Sarees</p>
                      <p className='prod_dict'>Extra 10% off</p>
                      <p className='prod_saving'>Great Savings!</p>
                  </div>
                </div>
              </Link>
            </div>
             <div className='item'>
              <Link to="/" className='product_a'>
                <div className='products_img_txt'>
                    <div className='products_img'>
                      <img className='img-fluid prodct_img' src={images7} alt="no-img" />
                    </div>
                    <div className='products_detail'>
                      <p className='prod_name'>Sarees</p>
                      <p className='prod_dict'>Extra 10% off</p>
                      <p className='prod_saving'>Great Savings!</p>
                  </div>
                </div>
              </Link>
            </div>
             <div className='item'>
              <Link to="/" className='product_a'>
                <div className='products_img_txt'>
                    <div className='products_img'>
                      <img className='img-fluid prodct_img' src={images8} alt="no-img" />
                    </div>
                    <div className='products_detail'>
                      <p className='prod_name'>Sarees</p>
                      <p className='prod_dict'>Extra 10% off</p>
                      <p className='prod_saving'>Great Savings!</p>
                  </div>
                </div>
              </Link>
            </div>
        </OwlCarousel>
      </div>
    )
  }
}

export default Product
