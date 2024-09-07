
import {LOGO_URL} from  "../utils/constants"
import {useState} from "react"; //using for login logout changing button ->react hook
import { Link } from "react-router-dom";  //to link the nav bar to provided paths
const Header = () =>{ 
    const [btnName , setbtnName] = useState("Login");  //useState hook will re-render the whole header after the setbtnName was called and button got updated to "Logout"
    return(
        <div className="header">
            <div className="logo"> 
                <img className="logop "
                src={LOGO_URL}/>
            </div>
            <div className="nav-bar">
               <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to ="/about">About Us</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link> </li>
                <li>Cart</li>
                <button className="login" onClick={() => { btnName==="Login" ? setbtnName("Logout") : setbtnName("Login")}}>   
                    {btnName}
                    </button>     
                      
               </ul>
            </div>
        </div>
    )
};
export default Header;