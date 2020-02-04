import React, {Component} from 'react';
import {NavLink } from 'react-router-dom'


class Footer extends Component {
    render(){
        return(
                 <footer className="footer">
                      <div className="frstfooter">
                        <div className="row">
                            <div className="col-md-2 col-sm-2 col-lg-2">
                            <ul className='footer_menu'>
                                <h4 className="footer_menu_head">ABOUT</h4>
                                <li className='nav-item'>
                                    <NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    exact
                                    to='/Home'
                                    >
                                    Home
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/About'
                                    >
                                    About
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Contact'
                                    >
                                    Contact
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Careers'
                                    >
                                    Careers
                                    </NavLink>
                                </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-lg-2">
                                <h4 className="footer_menu_head">HELP</h4>
                                    <ul className='footer_menu contact_footer'>
                                    <li className='footer_menu'> <NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Payments'
                                    >Payments </NavLink></li>
                                    <li className='footer_menu'> <NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Shipping'
                                    >Shipping </NavLink> </li>
                                    <li className='footer_menu'> <NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/FAQ'
                                    >FAQ </NavLink> </li>
                                    <li className='footer_menu'> <NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Report'
                                    >Report </NavLink> </li>
                                    </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-lg-2">
                                <h4 className="footer_menu_head">POLICY</h4>
                                    <ul className='footer_menu contact_footer'>
                                    <li className='footer_menu'><NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Return-Policy'
                                    >Return Policy </NavLink> </li>
                                    <li className='footer_menu'><NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Terms-Of-Use'
                                    >Terms Of Use </NavLink> </li>
                                    <li className='footer_menu'><NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Security'
                                    >Security </NavLink> </li>
                                    <li className='footer_menu'><NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Privacy'
                                    >Privacy </NavLink> </li>
                                    <li className='footer_menu'><NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Sitemap'
                                    >Sitemap </NavLink> </li>
                                    </ul>
                            </div>
                            <div className="col-md-2 col-sm-2 col-lg-2">
                                <h4 className="footer_menu_head">Social</h4>
                                    <ul className='footer_menu contact_footer'>
                                    <li className='footer_menu'><NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='https://www.facebook.com/' target='_blank'
                                    >Facebook </NavLink></li>
                                    <li className='footer_menu'><NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Sitemap'
                                    >Twitter </NavLink></li>
                                    <li className='footer_menu'><NavLink
                                    className='nav-link'
                                    activeClassName='footer_pg--Active'
                                    to='/Sitemap'
                                    >YouTube </NavLink></li>
                                    </ul>
                            </div>
                            <div className="col-md-4 col-sm-4 col-lg-4">
                             <h4 className="footer_menu_head"> Registered Office Address:</h4>
                                <p className='address_footer'>500 Christu Nagar,Vetturnimadam,Kanya Kumari District,</p>
                                <p className='address_footer'>Tamil Nadu.</p>
                                <p className='address_footer'>India - 629 003.</p>
                                <p className='address_footer'>Telephone: 987643213</p>
                            </div>
                        </div>
                    </div>
                    <div className="secfooter">
                        Copyright &copy; Vishnue
                    </div>
                </footer>
        )
    }

}
export default Footer