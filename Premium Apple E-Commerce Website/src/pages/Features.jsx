import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    // ==========================================
    // 🔧 MANUAL CONTENT CONFIGURATION
    // You can easily change titles, images, and links here!
    // ==========================================
    const categories = [
        {
            id: 'iphone',
            title: 'iPhone',
            image: 'https://i.pinimg.com/1200x/b9/a4/dd/b9a4dd7c58f6a1c689708f4b7d8c9fc8.jpg',
            link: '/iphone',
            theme: 'iphone'
        },
        {
            id: 'ipad',
            title: 'iPad',
            image: 'https://i.pinimg.com/736x/c1/4d/90/c14d900586961ad3ead39cdc7d56bb32.jpg',
            link: '/features',
            theme: 'ipad'
        },
        {
            id: 'watch',
            title: 'Apple Watch',
            isBrand: true,
            image: 'https://i.pinimg.com/736x/c1/4d/90/c14d900586961ad3ead39cdc7d56bb32.jpg', // Showing multiple watches
            link: '/features',
            theme: 'watch'
        },
        {
            id: 'airpods',
            title: 'AirPods',
            image: 'https://i.pinimg.com/1200x/01/9a/da/019adad7e8a80d823175d7e101ad4d08.jpg',
            link: '/features',
            theme: 'airpods'
        },
        {
            id: 'mac-laptops',
            title: 'Mac laptops',
            image: 'https://i.pinimg.com/1200x/5e/a7/f6/5ea7f6c4f5732eed769c8e15846d75ba.jpg',
            link: '/features',
            theme: 'mac'
        },
        {
            id: 'Home pod',
            title: 'Apple Home Pod',
            image: 'https://i.pinimg.com/1200x/31/d9/32/31d93269e4a47ad0549127a39c15b8d6.jpg', // Placeholder image icon
            link: '/features',
            theme: 'mac'
        }
    ];

    return (
        <div className="features-page">
            {/* Discover Hero */}
            <section className="discover-hero">
                <div className="discover-text">
                    <h1>Discover<br />what's new.</h1>
                    <button className="btn-view-all">View all</button>
                </div>
                <div className="discover-image-container">
                    <img
                        src="https://i.pinimg.com/736x/c3/00/19/c30019992fb701aa8d842faf804fac32.jpg"
                        alt="Discover what's new"
                    />
                </div>
            </section>

            {/* Category Grid */}
            <div className="category-grid">
                {categories.map((cat) => (
                    <div key={cat.id} className={`category-item ${cat.theme}`}>
                        <div className="category-header">
                            <h3>
                                {cat.isBrand && <span className="apple-icon"></span>}
                                {cat.title}
                            </h3>
                            <Link to={cat.link} className="btn-view-all">View all</Link>
                        </div>
                        <div className="category-image-wrapper">
                            <img src={cat.image} alt={cat.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;

