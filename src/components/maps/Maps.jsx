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

import mapimg from '../images/mapimg.jpg';

import { Component } from 'react';

class Maps extends Component{
    render(){
      return (
        <div class="container-fluid padi">
            <div class="map">
                <img src={mapimg} alt="img" />
            </div>
        </div>

      );
    }
}

export default Maps