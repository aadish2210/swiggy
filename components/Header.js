const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
            <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgX4q2VcODDSfF6nDlKyWMcqClx-lqX_qG61ZGqscg2xbisbsqyYUbKV22BHFlwcLccFU"/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

export default Header;