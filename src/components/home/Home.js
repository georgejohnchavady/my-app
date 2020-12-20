import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/jquery.mCustomScrollbar.min.css'
import Header from '../header/Header'
import Slides from '../slides/Slides'

function Home() {
    return ( <div class="main-layout">
                < Header/> 
                <Slides/>   
            </div>
        );
}
export default Home;