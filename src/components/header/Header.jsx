import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/jquery.mCustomScrollbar.min.css'
import { Component } from 'react';
import logo from '../images/logo.jpg';

  
  class Header extends Component{
      render(){
        return (
            <div>     
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                            <div className="menu-area">
                                <div className="limit-box">
                                    <nav className="main-menu">
                                        <ul className="menu-area-main">
                                            <li className="active"> <a href="index.html">Home</a> </li>
                                            <li> <a href="about.html">About</a> </li>
                                            <li> <a href="product.html">products</a> </li>
                                            <li> <a href="contact.html">Contact</a> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
  }

  export default Header