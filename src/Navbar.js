import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>CIS Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add"> New Blog</Link>
                <Link to="/create"> Create</Link>
                <Link to="/blogs"> Blog Details</Link>
                <Link to="/login"> Sign up</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;