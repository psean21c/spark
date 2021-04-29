const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>CIS Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create"> New Blog</a>
                <a href="/login"> Sign up</a>
            </div>
        </nav>
     );
}
 
export default Navbar;