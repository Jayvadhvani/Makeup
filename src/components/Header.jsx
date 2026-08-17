
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="header" style={{ padding: scrolled ? '1rem 3rem' : '1.5rem 3rem', boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.03)' : 'none' }}>
            <div className="header-content">
                <Link to="/" className="logo-link">
                    <img src="/assets/images/logo.png" alt="Gold Crown Makeup Studio" className="logo-img" />
                </Link>
                <nav className="nav-desktop">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/about" className={isActive('/about')}>About</Link>
                    <Link to="/services" className={isActive('/services')}>Services</Link>
                    <Link to="/bridal" className={isActive('/bridal')}>Bridal</Link>
                    <Link to="/academy" className={isActive('/academy')}>Academy</Link>
                    <Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
                    <Link to="/contact" className="btn-solid" style={{ padding: '0.8rem 1.5rem' }}>Book Now</Link>
                </nav>
                
                <button className="menu-btn">☰</button>
            </div>
        </header>
    );
}
