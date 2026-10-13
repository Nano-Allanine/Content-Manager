import { NavLink } from "react-router-dom"
import '../styles/Navbar.css';
import { Switch } from "@/components/ui/switch"
import { Hamburger, X } from 'lucide-react';
import { useState } from "react";




const Navbar = () => {
    const navlinks =[
        {name:"Hi, Allan", path:"/"},
        {name:"Login", path:"/login"},
        {name:"Logout", path:"/logout"},
        {name:"Register", path:"/register"},
    ]

    const[toggle, setToggle] = useState(false);

  return (

    <nav className="nav-area">
        <a>Content-Manager</a>
        <ul className="list">
            {navlinks.map((naalink)=>(
               <li key={naalink.name}><NavLink to={naalink.path} className={({isActive})=> isActive ? "active":"innactive"}>
                {naalink.name}</NavLink></li> 
            ))}
        </ul>
        <Switch/>

        <button className="ham" onClick={()=>setToggle(!toggle)}>
            {toggle ? <X />:<Hamburger />}
        </button>    
        {toggle &&(
            <ul className="mobile-list">
                {navlinks.map((naalink)=>( 
                    <li key={naalink.name}>
                        <NavLink to={naalink.path} onClick={()=>setToggle(false)}
                            className={({isActive})=> isActive ? 'active':'inactive'}>
                                {naalink.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        )}
    </nav>
  
  )
}

export default Navbar