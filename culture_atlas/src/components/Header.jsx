import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const location = useLocation()

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleLogout = () =>{
        if(window.confirm("Are you sure you want to logout?")){
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("role");
            localStorage.removeItem("userid");
            window.location.reload();
        }
    }

    return (
        <div className='Header'>
            <div className='brand'>
                <img src='/logo.png' height="50px" style={{marginLeft:"20px"}}/>
            </div>
            <button className="toggle-btn" onClick={handleToggle}>☰</button>
            <ul className={toggle ? "nav nav-underline show" : "nav nav-underline"}>
                <li className="nav-item">
                    <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={location.pathname === "/AboutUs" ? "nav-link active" : "nav-link"} to="/AboutUs">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className={location.pathname === "/ContactUs" ? "nav-link active" : "nav-link"} to="/ContactUs">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className={location.pathname === "/Student" ? "nav-link active" : "nav-link"} to="/Student">Student</Link>
                </li>
                {localStorage.getItem("role")==="admin"&&<li className="nav-item">
                    <Link className={location.pathname === "/Reels" ? "nav-link active" : "nav-link"} to="/aprovePost">Aprove</Link>
                </li>}
                {localStorage.getItem("isLoggedIn")?
                    <li className="nav-item">
                        <button className="nav-link" style={{background:"none",border:"none"}} onClick={handleLogout}>Log out</button>
                    </li>
                    :
                    <li className="nav-item">
                        <Link className={location.pathname === "/Login" ? "nav-link active" : "nav-link"} to="/Login">Login</Link>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Header
