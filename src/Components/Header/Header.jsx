import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <nav>
                <Link to ="/" className='navbar'>Home</Link>
                <Link to ="/users" className='navbar'>Users</Link>
                <Link to ="/posts" className='navbar'>Posts</Link>
                <Link to ="/about" className='navbar'>About</Link>
                <Link to ="/contact" className='navbar'>Contact Us</Link>
            </nav>

        </div>
    );
};

export default Header;