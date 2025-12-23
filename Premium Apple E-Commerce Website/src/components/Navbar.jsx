import { Link } from 'react-router-dom';
import { FaUser, FaSearch, FaShoppingBag, FaApple, FaHome, FaMobileAlt, FaStar, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import SearchOverlay from './SearchOverlay';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { user, logout } = useAuth();
    const { cartCount } = useCart();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <div className="navbar-dock-wrapper">
                <nav className={`navbar-dock ${isOpen ? 'expanded' : 'collapsed'}`}>

                    {/* Toggle Button (Apple Logo) */}
                    <div className="nav-menu-btn" onClick={toggleMenu}>
                        <FaApple className="logo-icon" />
                    </div>

                    {/* Horizontal Links */}
                    <div className={`nav-content ${isOpen ? 'show' : 'hide'}`}>

                        <Link to="/" className="nav-item">
                            <FaHome /> <span>Home</span>
                        </Link>

                        <Link to="/iphone" className="nav-item">
                            <FaMobileAlt /> <span>Iphone</span>
                        </Link>

                        <Link to="/features" className="nav-item">
                            <FaStar /> <span>Features</span>
                        </Link>

                        <Link to="/help" className="nav-item">
                            <FaQuestionCircle /> <span>Help</span>
                        </Link>

                        <div className="nav-divider"></div>

                        <div className="nav-icon-btn" title="Search" onClick={() => setIsSearchOpen(true)}>
                            <FaSearch />
                        </div>

                        <Link to="/cart" className="nav-icon-btn" title="Bag">
                            <FaShoppingBag />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </Link>

                        {user ? (
                            <div className="nav-user-profile" onClick={logout} title="Logout">
                                {user.name.charAt(0)}
                            </div>
                        ) : (
                            <Link to="/login" className="nav-icon-btn" title="Login">
                                <FaUser />
                            </Link>
                        )}

                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
