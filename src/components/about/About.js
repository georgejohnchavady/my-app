import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/jquery.mCustomScrollbar.min.css'
import Header from '../header/Header'
import Banner from '../about/Banner'
import Content from '../about/Content'
import Footer from '../footer/Footer'

function About() {
    return ( <div className="main-layout">
                <Header/> 
                <Banner/>
                <Content/>
                <Footer/>
            </div>
        );
}
export default About;