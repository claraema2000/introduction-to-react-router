import './Header.css';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <nav>
                <Link to ="/" className='navbar'>Home</Link>
                <NavLink to ="/users" className='navbar'>Users</NavLink>
                <NavLink to ="/posts" className='navbar'>Posts</NavLink>
                <NavLink to ="/about" className='navbar'>About</NavLink>
                <NavLink to ="/contact" className='navbar'>Contact Us</NavLink>
            </nav>

        </div>
    );
};

export default Header;