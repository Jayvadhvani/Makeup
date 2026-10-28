import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(window.scrollY > 50);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
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
                <div className="header-topbar">
                    <div className="header-topbar-inner">
                        <a href="tel:+919839550961" className="topbar-item">
                            <span className="topbar-icon" aria-hidden="true">☎</span>
                            <span>+91 98395 50961</span>
                        </a>
                        <span className="topbar-divider" aria-hidden="true"></span>
                        <a href="mailto:info@goldcrownstudio.com" className="topbar-item topbar-email">
                            <span className="topbar-icon" aria-hidden="true">✉</span>
                            <span>info@goldcrownstudio.com</span>
                        </a>
                        <span className="topbar-divider topbar-desktop-only" aria-hidden="true"></span>
                        <span className="topbar-note topbar-desktop-only">Luxury Bridal & Occasion Makeup · Kanpur</span>
                        <div className="topbar-socials" aria-label="Social media">
                            <a href="https://www.instagram.com/goldcrownstudio/?hl=en" target="_blank" rel="noopener noreferrer" className="topbar-social" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                            </a>
                            <span className="topbar-social-divider" aria-hidden="true"></span>
                            <a href="https://www.facebook.com/sunita.gupta.689159" target="_blank" rel="noopener noreferrer" className="topbar-social" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
                            </a>
                            <span className="topbar-social-divider" aria-hidden="true"></span>
                            <a href="https://www.youtube.com/@user-yt8mw6bd8x/videos" target="_blank" rel="noopener noreferrer" className="topbar-social" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                            <span className="topbar-social-divider" aria-hidden="true"></span>
                            <a href="https://in.pinterest.com/goldcrownstudio_makeupstudio/" target="_blank" rel="noopener noreferrer" className="topbar-social" aria-label="Pinterest">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.439 2.981 7.439 6.965 0 4.161-2.624 7.51-6.27 7.51-1.222 0-2.373-.532-2.766-1.385l-.754 2.874c1.165.346 2.402.532 3.682.532 6.621 0 11.988-5.368 11.988-11.988C24.032 5.367 18.638 0 12.017 0z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <Link to="/" className="logo-link">
                        <img src={import.meta.env.BASE_URL + 'assets/images/logo.png'} alt="Gold Crown Makeup Studio" className="logo-img" />
                    </Link>
                    <nav className="nav-desktop" aria-label="Main navigation">
                        <Link to="/" className={isActive('/')}>Home</Link>
                        <Link to="/about" className={isActive('/about')}>About</Link>
                        <Link to="/services" className={'nav-dropdown ' + isActive('/services')}>Services</Link>
                        <Link to="/bridal" className={'nav-dropdown ' + isActive('/bridal')}>Bridal</Link>
                        <Link to="/academy" className={'nav-dropdown ' + isActive('/academy')}>Academy</Link>
                        <Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
                        <Link to="/blog" className={isActive('/blog')}>Blog</Link>
                        <Link to="/contact" className="btn-solid nav-book-btn"><span className="nav-book-icon" aria-hidden="true">▦</span> Book Now <span className="nav-book-arrow" aria-hidden="true">→</span></Link>
                    </nav>

                    <button
                        className={'menu-btn' + (menuOpen ? ' menu-btn-open' : '')}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                    >
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div id="mobile-navigation" className={'mobile-drawer' + (menuOpen ? ' mobile-drawer-open' : '')}>
                <div className="mobile-drawer-inner">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/about" className={isActive('/about')}>About</Link>
                    <Link to="/services" className={isActive('/services')}>Services</Link>
                    <Link to="/bridal" className={isActive('/bridal')}>Bridal</Link>
                    <Link to="/academy" className={isActive('/academy')}>Academy</Link>
                    <Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
                    <Link to="/blog" className={isActive('/blog')}>Blog</Link>
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
