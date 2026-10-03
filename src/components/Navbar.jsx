import { Link } from "react-router-dom";
import '../styles/navbar.css'

function Navbar () {
    return (
        <header className="navbar">
        <div className="navbar-container">
            <Link to='/' className="navbar-logo">
            Davis
            </Link>


            <nav className="navbar-links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/projects'>Projects</Link>
            </nav>
        </div>
        
        </header>
    )
}

export default Navbar;