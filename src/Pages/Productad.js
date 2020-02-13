import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';

class Productad extends Component {
constructor(){
  super()
  this.state = {
    data: [],
    loaded: false
  }
}
 componentDidMount () {
    fetch('http://localhost/vishnue/Deals_of_market/public/productadd').then(res => res.json())
      .then(response => {
        this.setState({
          data: response.map(c => {
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
        <div className = "common_product_add">
          <div className='productadd_img_cmn'>
            {data.map((val,index) => ( 
                <div key={index} className='product_add'>
                     <div className='viewallproducts_img'>
                        <Link  to="/" className='product_add_img_a'>
                            <img  className='img-fluid product_add_img' src={val.product_add_images} alt="no-img" />
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
      )
              } else return (<div> <Skeleton circle={true} animation="wave" count={10} /> </div>)
  }
}

export default Productad
