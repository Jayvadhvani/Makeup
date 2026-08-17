
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <>
            <header className={'header' + (scrolled ? ' header-scrolled' : '')}>
                <div className="header-content">
                    <Link to="/" className="logo-link">
                        <img src={import.meta.env.BASE_URL + 'assets/images/logo.png'} alt="Gold Crown Makeup Studio" className="logo-img" />
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

                    <button
                        className={'menu-btn' + (menuOpen ? ' menu-btn-open' : '')}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div className={'mobile-drawer' + (menuOpen ? ' mobile-drawer-open' : '')}>
                <div className="mobile-drawer-inner">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/about" className={isActive('/about')}>About</Link>
                    <Link to="/services" className={isActive('/services')}>Services</Link>
                    <Link to="/bridal" className={isActive('/bridal')}>Bridal</Link>
                    <Link to="/academy" className={isActive('/academy')}>Academy</Link>
                    <Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
                    <Link to="/testimonials" className={isActive('/testimonials')}>Testimonials</Link>
                    <Link to="/contact" className="btn-solid mobile-book-btn">Book Now</Link>
                </div>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
            )}
        </>
    );
}
