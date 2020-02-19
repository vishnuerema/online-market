import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import Footer from './footer'
import Navbar from './Navbar'

class Viewallproducts extends Component {
constructor(){
  super()
  this.state = {
    data: [],
    loaded: false
  }
}
 componentDidMount () {
    fetch('http://localhost/laravel/Deals_of_market/public/welcome').then(res => res.json())
      .then(response => {
        this.setState({
          data: response[0].map(c => {
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
        <div className = "common_home">
        <Navbar />
          <div className='product_cmn'>
          <div className='product_head'>
          <p className='product_hed_txt'>Deal of the day</p>
          </div>
          <div className='viewallitems_cmn'>
              <div className='row'>
                  {data.map((val,index) => ( 
                    <div key={index} className='col-md-3 col-lg-3 col-sm-6 col-xs-12'>
                      <div className='viewallitems'>
                            <Link  to={`/View-product/${val.home_product_id}`} className='viewallproduct_a'>
                            <div  className='products_img_txt'>
                                <div className='viewallproducts_img'>
                                  <img  className='img-fluid prodct_img' src={val.home_product_images[0]} alt="no-img" />
                                </div>
                                <div  className='viewallproducts_detail'>
                                  <p  className='prod_name' >{val.home_product_name}</p>
                                    <p className='prod_dict'>₹ {val.home_product_amount.cost}</p>
                                    <p className='prod_saving'>₹{val.home_product_amount.discount} Off</p>
                              </div>
                            </div>
                            </Link>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
          </div>
        <Footer />
        </div>
      )
              } else return (<div> <Skeleton circle={true} animation="wave" count={10} /> </div>)
  }
}

export default Viewallproducts
