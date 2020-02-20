import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import Footer from './footer'
import Navbar from './Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Similarproduct from './Similarproduct'


class Viewproduct extends Component {
constructor(props){
  super(props)
  this.state = {
    data: [],
    loaded: false,
    path: this.props.match.params.id,
  }
  
}
 componentDidMount () {
  fetch('http://localhost/vishnue/Deals_of_market/public/viewproduct_data', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
				path: this.state.path
      })
		}).then(response => {
				return response.json()
			}).then(response => {
        console.log(response)
				this.setState({
          data: response[0].map(c => {
            for(var i in c) {
                if(c[i] != null && (c[i][0] === '{' || c[i][0] === '[')) c[i] = JSON.parse(c[i])
            }
            return c;
            }),
          loaded: true
				});
			});
  }

  render () {
    
    const { data } = this.state
    if(this.state.loaded) {
        return (
          <div className = "common_cartview">
            <Navbar />
                {data.map((val,index) => (
                   <div key={index} className='product_cart_main'>
                    <div className='product_cart'>
                      <div className="Viewproduct_carosuel_cmn">
                          <Carousel className="Viewproduct_carosuel">
                            {val.home_product_images.map((img_c, img_i) => (
                              <div key={img_i} className="Viewproduct_imgdiv">
                                  <img  className='img-fluid view_cart_imgs' src={img_c} alt="no-img" />
                              </div>
                            ))}
                          </Carousel>
                          <div className="addcart_btn">
                              <Link to="/" className="addtocart">ADD TO CART</Link>
                              <Link to="/" className="buynow">BUY NOW</Link>
                          </div>
                        </div>
                        <div className="Viewproduct_imgdetail">
                          <div className="viewprod_link"><Link  to='/'  className='productview_a'>Home</Link></div>
                          <div className="head_name_prod">{val.home_product_name}</div>
                          <div className="price_name_prod"><span className="cost_price">₹{val.home_product_amount.cost}</span><span className="discount_price"><strike>₹{val.home_product_amount.discount}</strike></span><span className="actul_price">₹{val.home_product_amount.actual_price}</span></div>
                          <div className="color_name_prod_head">Color : </div>
                          <div className="color_name_prod"> 
                          {val.home_product_attributes.map((colors, index) => (
                              <div key={index} className="Viewproduct_color">
                                {colors.color.map((color, color_i)=> (<span key={color_i} style={{background: color}} className="color_prod rounded-circle"></span>))}
                                  
                              </div>
                            ))}
                            </div>
                          <div className="view_prod_highlt">
                          <p className="viewprod_highlit_head">Highlights</p>
                          <div className="view_prod_highlt_list"><span className="viewprod_highlit_head">Size</span> : <span>{val.home_product_specification.size.replace(/<[^>]*>?/gm, '')}</span></div>
                          <div className="view_prod_highlt_list"><span className="viewprod_highlit_head">Color</span> : <span>{val.home_product_specification.color.replace(/<[^>]*>?/gm, '')}</span></div>
                          <div className="view_prod_highlt_list"><span className="viewprod_highlit_head">Proof</span> : <span>{val.home_product_specification.proof.replace(/<[^>]*>?/gm, '')}</span></div>
                          <div className="view_prod_highlt_list"><span className="viewprod_highlit_head">Weight</span> : <span>{val.home_product_specification.weight.replace(/<[^>]*>?/gm, '')}</span></div>
                          <div className="view_prod_highlt_list"><span className="viewprod_highlit_head">Form factor</span> : <span>{val.home_product_specification['form factor'].replace(/<[^>]*>?/gm, '')}</span></div>
                          <div className="view_prod_highlt_list"><span className="viewprod_highlit_head">Box includes</span> : <span>{val.home_product_specification['box includes'].replace(/<[^>]*>?/gm, '')}</span></div>
                          <div className="view_prod_highlt_list"><span className="viewprod_highlit_head">Material type</span> : <span>{val.home_product_specification['material type'].replace(/<[^>]*>?/gm, '')}</span></div>
                          <div className="view_prod_highlt_list"><span className="viewprod_highlit_head">manufacturer warrent</span> : <span>{val.home_product_specification['manufacturer warrent'].replace(/<[^>]*>?/gm, '')}</span></div>
                        </div>
                        </div>
                    </div>
                    <div className="specific_desc_viewprod">
                      <div className="specification_viewprod">
                            <p className="viewprod_highlit_head">Specification</p>
                            <div className="specification_viewprod_tbl">
                            <table className="table table-bordered">
                                <tbody>
                                  {Object.keys(val.home_product_specification).map((keyName, i) => (
                                      <tr key={i}>
                                        <td>{keyName}</td>
                                        <td>{val.home_product_specification[keyName].replace(/<[^>]*>?/gm, '')}</td>
                                      </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                        </div>
                        <div className="descrip_viewprod">
                            <p className="viewprod_highlit_head">Description</p>
                            <div className="desc_viewprod_tbl">
                              {val.home_product_description.productDescription.replace(/<[^>]*>?/gm, '')}
                            </div>
                        </div>
                      </div>
                      <div className="Similar_viewprod">
                        <Similarproduct />
                      </div>
                    </div>
                  ))}
              
            <Footer />
          </div>
        )
                } else return (<div> <Skeleton circle={true} animation="wave" count={10} /> </div>)
    }
}

export default Viewproduct
