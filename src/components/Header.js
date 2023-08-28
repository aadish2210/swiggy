import { LOGO_URL } from "../utils/constants";
import {useState} from "react"
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
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
                <li><button onClick={changeText}>{text}</button></li>
            </ul>
            </div>
        </div>
    )
}

export default Header;