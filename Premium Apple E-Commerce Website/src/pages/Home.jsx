import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

// ==========================================
// 🔧 MANUAL CAROUSEL CONFIGURATION
// You can easily change iPhone names, taglines, prices, 
// and image URLs here for the product carousel!
// ==========================================
const phones = [
    {
        id: 17,
        name: "iPhone 17 Pro Max",
        tagline: "The Future is Now.",
        price: "From $1199",
        image: "https://i.pinimg.com/736x/91/46/7e/91467e247d09cb4657c68d1e90a2b110.jpg", // Update manual photo here
        desc: "Titanium design, A19 Pro chip, and the best camera system ever in an iPhone.",
    },
    {
        id: 16,
        name: "iPhone 16 Pro",
        tagline: "Power meets elegance.",
        price: "From $999",
        image: "https://i.pinimg.com/736x/9a/25/ed/9a25edd46c07031543dbd581d862c87b.jpg", // Update manual photo here
        desc: "A18 Bionic, Action button, and all-day battery life.",
    },
    {
        id: 15,
        name: "iPhone 15",
        tagline: "New camera. New design.",
        price: "From $799",
        image: "https://i.pinimg.com/1200x/3a/4c/4a/3a4c4a6971de924f80ac9ed5d4367e2e.jpg", // Update manual photo here
        desc: "Dynamic Island, 48MP Main camera, and USB-C.",
    },
    {
        id: 14,
        name: "iPhone 14 Plus",
        tagline: "Big and bigger.",
        price: "From $699",
        image: "https://i.pinimg.com/736x/79/01/a2/7901a207b582ad4f0f850d4ffc0e6aef.jpg", // Update manual photo here
        desc: "Vital safety technology, longer battery life.",
    },
    {
        id: 13,
        name: "iPhone 13",
        tagline: "Your new superpower.",
        price: "From $599",
        image: "https://i.pinimg.com/1200x/22/ed/08/22ed088e7411176a53963f651bb54e21.jpg", // Update manual photo here
        desc: "A huge leap in battery life and durable design.",
    }
];

const Home = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    return (
        <div className="home-page">
            {/* Immersive Home Hero */}
            <section className="home-hero-premium">
                <div className="hero-text">
                    <h1>iPhone 17 Pro Max</h1>
                    <p>Hello, Apple Intelligence.</p>
                    <div className="hero-btns">
                        <button
                            className="btn btn-white"
                            onClick={() => handleAddToCart({
                                id: 17,
                                name: "iPhone 17 Pro Max",
                                price: "$1199",
                                image: "https://i.pinimg.com/736x/91/46/7e/91467e247d09cb4657c68d1e90a2b110.jpg"
                            })}
                        >
                            Add to Cart
                        </button>
                        <Link to="/cart" className="btn btn-outline">Buy</Link>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img
                        src="https://i.pinimg.com/1200x/09/09/cd/0909cd38217016047ae6339eab3da0eb.jpg"
                        alt="iPhone 16 Pro"
                        className="hero-image-main"
                    />
                </div>
            </section>

            {/* Carousel Section */}
            <section className="carousel-section" id="shop">
                <h2 className="section-title">Which iPhone is right for you?</h2>
                <Carousel products={phones} />
            </section>

            {/* Premium Home Grid */}
            <section className="home-grid-premium">
                <div className="home-grid-item light-theme">
                    <div className="item-text-top">
                        <h2>iPad <span className="air-text">air</span></h2>
                        <p>Two sizes. Faster chip. Does it all.</p>
                        <div className="item-btns">
                            <button
                                className="btn btn-blue"
                                onClick={() => handleAddToCart({
                                    id: 'ipad-air',
                                    name: "iPad Air",
                                    price: "$599",
                                    image: "https://i.pinimg.com/1200x/55/fb/b5/55fbb5a96efab1e4abd8070b6c51aa09.jpg"
                                })}
                            >
                                Add to Cart
                            </button>
                            <Link to="/cart" className="btn btn-outline">Buy</Link>
                        </div>
                    </div>
                    <div className="item-image-wrapper">
                        <img
                            src="https://i.pinimg.com/1200x/55/fb/b5/55fbb5a96efab1e4abd8070b6c51aa09.jpg"
                            alt="iPad Air"
                        />
                    </div>
                </div>

                <div className="home-grid-item dark-theme">
                    <div className="item-text-top">
                        <h2>AirPods Pro 2</h2>
                        <p>Now with a Hearing Aid feature.²</p>
                        <div className="item-btns">
                            <button
                                className="btn btn-blue"
                                onClick={() => handleAddToCart({
                                    id: 'airpods-pro-2',
                                    name: "AirPods Pro 2",
                                    price: "$249",
                                    image: "https://i.pinimg.com/736x/dc/5e/24/dc5e2494b742e5abbbce5b1e604c47f8.jpg"
                                })}
                            >
                                Add to Cart
                            </button>
                            <Link to="/cart" className="btn btn-outline">Buy</Link>
                        </div>
                    </div>
                    <div className="item-image-wrapper">
                        <img
                            src="https://i.pinimg.com/736x/dc/5e/24/dc5e2494b742e5abbbce5b1e604c47f8.jpg"
                            alt="AirPods Pro 2"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
