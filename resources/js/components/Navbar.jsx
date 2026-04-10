import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const { pathname } = useLocation();
    const cls = (path) => pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">HR <span>Factor</span></Link>
                <ul className="navbar-links">
                    <li><Link to="/" className={cls('/')}>Sākums</Link></li>
                    <li><Link to="/about" className={cls('/about')}>Par mums</Link></li>
                    <li><Link to="/services" className={cls('/services')}>Pakalpojumi</Link></li>
                    <li><Link to="/contact" className={cls('/contact')}>Kontakti</Link></li>
                </ul>
            </div>
        </nav>
    );
}
