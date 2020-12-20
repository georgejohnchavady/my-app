import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/jquery.mCustomScrollbar.min.css'
import { Component } from 'react';
import logo from '../images/logo.jpg';


import Home from '../home/Home'
import About from '../about/About'
  
  class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showPage: 'index'  // set a value in state to store a page name
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(pageName) {  // switch the value of the showPage state
        this.setState({
          showPage:pageName 
        });
      }
      getComponent() {
        if (this.state.showPage =='index') {  
          return <Home/>;
        } else if(this.state.showPage =='about') {
          return <About/>;
        } else if(this.state.showPage =='product') {
            return null;
        } else if(this.state.showPage =='contact') {
            return null;
        }
      }
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
                                            <li className="active"> <a href="index.html" onClick={()=>this.handleClick('index')}>Home</a> </li>
                                            <li> <a href="about.html" onClick={()=>this.handleClick('about')}>About</a> </li>
                                            <li> <a href="product.html" onClick={()=>this.handleClick('product')}>products</a> </li>
                                            <li> <a href="contact.html" onClick={()=>this.handleClick('contact')}>Contact</a> </li>
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