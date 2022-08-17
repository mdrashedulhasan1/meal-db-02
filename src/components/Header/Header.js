import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/meals">Meals</Link>
        </nav>
    );
};

export default Header;