import { FaTimes, FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const SearchOverlay = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            document.getElementById('search-input')?.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <button className="close-btn" onClick={onClose}><FaTimes /></button>
            <div className="search-container-overlay">
                <FaSearch className="search-icon-large" />
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search Apple.com"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li>iPhone 17 Pro</li>
                    <li>Apple Vision Pro</li>
                    <li>AirPods Max</li>
                </ul>
            </div>
        </div>
    );
};

export default SearchOverlay;
