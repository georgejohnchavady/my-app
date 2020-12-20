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

import content from '../images/content.png';

import { Component } from 'react';

class Content extends Component{
    render(){
      return (
        <div class="about">
            <div class="container">
                <div class="row">
                    <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="about_box">
                            <figure><img src={content} /></figure>
                        </div>
                    </dir>
                    <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="about_box">
                            <h3>'Flavours Of India'</h3>
                            <p>Bringing to Lithuania the wide range of flavours from India. We strive each day to fulfill our commitment to our customers. Thank you for choosing us!</p>
                        </div>
                    </dir>
                </div>
            </div>
        </div>

      );
    }
}

export default Content