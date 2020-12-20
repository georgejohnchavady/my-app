import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/jquery.mCustomScrollbar.min.css'
import Header from '../header/Header'
import Slides from '../slides/Slides'
import Products from '../products/Products'
import Maps from '../maps/Maps'

function Home() {
    return ( <div className="main-layout">
                <Header/> 
                <Slides/>   
                <Products/>
                <Maps/>
            </div>
        );
}
export default Home;