import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="footer-brand-header">
                {/* Large 3D Text Effect */}
                <h1 className="brand-text-large">Iphone 17 Air</h1>
            </div>

            <div className="footer-grid">
                <div className="footer-col-info">
                    <p className="address">
                        2261 Market Street #5039<br />
                        San Francisco, CA 94114
                    </p>
                    <div className="system-status">
                        <span className="status-dot"></span>
                        <span>All systems normal</span>
                    </div>
                </div>

                <div className="footer-col-links">
                    <h4>Documentation</h4>
                    <Link to="/getting-started">Getting Started</Link>
                    <Link to="/api">API Reference</Link>
                    <Link to="/integrations">Integrations</Link>
                    <Link to="/examples">Examples</Link>
                    <Link to="/sdks">SDKs</Link>
                </div>

                <div className="footer-col-links">
                    <h4>Resources</h4>
                    <Link to="/changelog">Changelog</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/status">Status</Link>
                    <Link to="/webhooks">Webhooks</Link>
                </div>

                <div className="footer-col-links">
                    <h4>Company</h4>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/customers">Customers</Link>
                    <Link to="/brand">Brand</Link>
                </div>

                <div className="footer-col-links">
                    <h4>Legal</h4>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
