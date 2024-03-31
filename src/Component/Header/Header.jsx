import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const style={listStyle:'none',display:"flex" ,gap:30,}
    return (
        <div >
            <ul style={style}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Google Login</Link></li>
                <li><Link to="/login2">Login Bro</Link></li>
                <li><Link to={"/github_login"}>giHub</Link></li>
             




            
            
            </ul>
        </div>
    );
};

export default Header;