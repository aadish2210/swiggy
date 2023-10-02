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
        <div className="header flex justify-between bg-pink-100 shadow-lg m-2 border border-solid border-black">
            <div className="logo-container">
            <img  className="logo w-36 p-2" src={LOGO_URL}/>
            </div>
            <div className="nav-items flex items-center">
            <ul className="flex pr-10 gap-7">
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