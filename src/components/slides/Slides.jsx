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

import Carousel from 'react-bootstrap/Carousel'





  class Slides extends Component{
      render(){
        return (
                <div >                    

                    <Carousel>
                        <Carousel.Item>                            
                            <img className="d-block w-100" src={banner1} alt="First slide"/>  
                        </Carousel.Item>

                        <Carousel.Item>                            
                        <   img className="d-block w-100" src={banner2} alt="Second slide"/>      
                        </Carousel.Item>

                        <Carousel.Item>                            
                            <img className="d-block w-100" src={banner3} alt="Third slide"/>    
                        </Carousel.Item>
                    </Carousel>


                </div>

        );
      }
  }

  export default Slides