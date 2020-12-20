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

import icon1 from '../icon/p1.jpg';
import icon2 from '../icon/p2.jpg';
import icon3 from '../icon/p3.jpg';
import icon4 from '../icon/p4.jpg';
import icon5 from '../icon/p5.jpg';
import icon6 from '../icon/p6.jpg';
import icon7 from '../icon/p7.jpg';
import icon8 from '../icon/p8.jpg';
import icon10 from '../icon/p10.jpg';

import { Component } from 'react';

class Products extends Component{
    render(){
      return (
          <div>
            <div class="product">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <h2>our <strong class="black">products</strong></h2>
                                <span>We package the products with best services to make you a happy customer.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-bg">
                <div class="product-bg-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon1}/></i>
                                    <h3>Ashirvad Paneer Masala</h3>
                                    <span>€2.50</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon2}/></i>
                                    <h3>Eastern Chicken Masala</h3>
                                    <span>$5.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon3}/></i>
                                    <h3>Eastern Garam Masala (in stock)</h3>
                                    <span>€10.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon4}/></i>
                                    <h3>Brahmin Sambar Powder</h3>
                                    <span>€2.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon5}/></i>
                                    <h3>Eastern Kadu Mango(400g) + Puli Inji Pickle (400g)</h3>
                                    <span>€5.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon6}/></i>
                                    <h3>Aashirvaad Rava Idli Instant Mix, 500g</h3>
                                    <span>€3.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon7}/></i>
                                    <h3>Aashirvaad Sambar Masala</h3>
                                    <span>€1.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon8}/></i>
                                    <h3>Paneer Butter Masala</h3>
                                    <span>€1.50</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={icon10}/></i>
                                    <h3>Curry Powder</h3>
                                    <span>$2.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Products