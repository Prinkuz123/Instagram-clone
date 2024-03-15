import { Link } from "react-router-dom"
import logo from "../img/insta.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
   
    <ul className="nav-bar">
    <img src={logo} />
<Link to="/signUp">  <li>Sign Up</li></Link>
<Link to="/signIN"><li>Sign In</li></Link>
<Link to="/profile"><li>Profile</li></Link>


    
    

    </ul>
      
    </div>
  )
}

export default Navbar
