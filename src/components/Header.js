import { LOGO_URL } from "../utils/constants";
import {useState} from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [text , setText]=useState("Login")
    const changeText = ()=>{
        text=="Login" ? setText("Logout") : setText("Login")
    }

    return(
        <div className="header">
            <div className="logo-container">
            <img  className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Online Status : { useOnlineStatus() ? "✅" : "🔴"}</li>
                <li><Link to="/" style={{color:"black", textDecoration:"none"}}>Home</Link></li>
                <li><Link to="/about" style={{color:"black", textDecoration:"none"}}>About Us</Link></li>
                <li><Link to="/contact" style={{color:"black", textDecoration:"none"}}>Contact Us</Link></li>
                <li>Cart</li>
                <li><Link to="/lazy" style={{color:"black", textDecoration:"none"}} >Lazy Loading Demo</Link></li>
                <li><button onClick={changeText}>{text}</button></li>
            </ul>
            </div>
        </div>
    )
}

export default Header;