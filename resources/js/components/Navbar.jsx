import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style1.css'

const Navbar = () => {

    const containerStyle = {
        backgroundColor: 'blue',
        padding: '20px',
        textAlign: 'center',
    };

    
    return (
        <nav>
            <ul>
                <li><Link to="/accueil" className="title" >Accueil</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;