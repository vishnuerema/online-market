import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render () {
    return (
    	<div className='common_header'>
			<nav className='header navbar navbar-expand-lg'>
				<div className='container'>
					<div className='logo_navbar'>
					<Link className='navbar-brand' to='/Home'>
						Deals of Market
					</Link>
					</div>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<div className='nav_searchbar'>
						<form>
						<div className="input-group">
							<input type="text" className="form-control nav_srchbar" placeholder="Search" />
							<div className="input-group-append">
							<span className="input-group-text nav_srchbar_addon"><i className="fa fa-search"></i></span>
							</div>
						</div>
						</form>
					</div>
					<div className='nav_logintn'>
						<div className="dropdown nav_cmn_dropdwn1">
							<button className="dropbtn logibtns"><Link className='nav_dropdwn_a' to='/Signin'>Login</Link></button>
							<div className="dropdown-content nav_drop_dwn_contnt">
								<Link className='nav_dropdwn_a' to='/Signup'>Sign up</Link>
								<Link className='nav_dropdwn_a' to='/Home'>My Profile</Link>
								<Link className='nav_dropdwn_a' to='/Home'>Orders</Link>
								<Link className='nav_dropdwn_a' to='/Home'>Wishlist</Link>
							</div>
						</div>
					</div>
					<div className='nav_cartimg'>
						<div className="cart_svg"><a className="cart_img_a" href="/Home"><svg className="_2fcmoV" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="_2JpNOH" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg><span className="cart_txt">Cart</span></a></div>
					</div>
				</div>
				</div>
			</nav>
			<div className="category_navbar">
				<div className="container">
					<div className='cmn_catgry_nav_sub'>
						<div className='catgry_nav_sub'>
							<div className="dropdown2 nav_cmn_dropdwn1">
								<div className="moredropbtn nav_more">Electronics <span className="nav_arrow_icon"><i className="fa fa-angle-down" ></i></span>
								</div>
								<div className="dropdown-content nav_drop_dwn_contnt">
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
								</div>
							</div>
						</div>
						<div className='catgry_nav_sub'>
							<div className="dropdown2 nav_cmn_dropdwn1">
								<div className="moredropbtn nav_more">Men<span className="nav_arrow_icon"><i className="fa fa-angle-down" ></i></span>
								</div>
								<div className="dropdown-content nav_drop_dwn_contnt">
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
								</div>
							</div>
						</div>
						<div className='catgry_nav_sub'>
							<div className="dropdown2 nav_cmn_dropdwn1">
								<div className="moredropbtn nav_more">Women<span className="nav_arrow_icon"><i className="fa fa-angle-down" ></i></span>
								</div>
								<div className="dropdown-content nav_drop_dwn_contnt">
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
								</div>
							</div>
						</div>
						<div className='catgry_nav_sub'>
							<div className="dropdown2 nav_cmn_dropdwn1">
								<div className="moredropbtn nav_more">Baby & Kids<span className="nav_arrow_icon"><i className="fa fa-angle-down" ></i></span>
								</div>
								<div className="dropdown-content nav_drop_dwn_contnt">
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
								</div>
							</div>
						</div>
						<div className='catgry_nav_sub'>
							<div className="dropdown2 nav_cmn_dropdwn1">
								<div className="moredropbtn nav_more">Home & Furniture<span className="nav_arrow_icon"><i className="fa fa-angle-down" ></i></span>
								</div>
								<div className="dropdown-content nav_drop_dwn_contnt">
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
								</div>
							</div>
						</div>
						<div className='catgry_nav_sub'>
							<div className="dropdown2 nav_cmn_dropdwn1">
								<div className="moredropbtn nav_more">Sports, Books & More<span className="nav_arrow_icon"><i className="fa fa-angle-down" ></i></span>
								</div>
								<div className="dropdown-content nav_drop_dwn_contnt">
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
									<Link className='nav_dropdwn_a' to='/Home'>OnlineMarket</Link>
								</div>
							</div>
						</div>
						<div className='catgry_nav_sub'>
							<div className="offerzone">
								Offer zone
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Navbar
