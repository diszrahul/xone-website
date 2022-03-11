import Footer from "../footer";
import Navbar from "../navbar";

const Layout = ({ children }) => {
    return ( 
        <div className = "mx-auto w-100">
                <Navbar/>
                { children }
                <Footer/>
        </div>
     );
}
 
export default Layout;