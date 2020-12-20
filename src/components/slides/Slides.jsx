import '../css/animate.min.css'
import '../css/bootstrap.min.css';
import '../css/jquery-ui.css';
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/meanmenu.css';
import '../css/nice-select.css';
import '../css/normalize.css';
import '../css/owl.carousel.min.css'
import '../css/responsive.css';
import '../css/slick.css';
import '../css/style.css';


import { Component } from 'react';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';




  class Slides extends Component{
      render(){
        return (
            <section className="slider_section">
                <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="first-slide" src={banner1} alt="First slide"/>                            
                        </div>
                        
                        <div className="carousel-item">
                            <img className="second-slide" src={banner2} alt="Second slide"/>                            
                        </div>

                        <div className="carousel-item">
                            <img className="third-slide" src={banner3} alt="Third slide"/>                            
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i className='fa fa-angle-right'></i>
                    </a>
                    <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i className='fa fa-angle-left'></i>
                    </a>

                </div>

            </section>
        );
      }
  }

  export default Slides