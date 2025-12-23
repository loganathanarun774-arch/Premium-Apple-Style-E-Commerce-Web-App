import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

// ==========================================
// 🔧 MULTI-PRODUCT CONFIGURATION
// ==========================================
const productsConfig = [
    {
        id: 1,
        title: "iPhone 17",
        subTitle: "Pro Max",
        features: [
            "48MP camera.",
            "A19 Bionic chip.",
            "Aluminum frame."
        ],
        heroMedia: "https://i.pinimg.com/1200x/95/a2/84/95a2849a31dcdf89ac9d3fa42d1b3156.jpg",
        mediaType: "Image",

        colors: {
            background: "#000000",
            textPrimary: "#FFFFFF",
            textSecondary: "#86868b",
            accent: "#f5f5f7"
        }
    },
    {
        id: 2,
        title: "iPhone 17 Air",
        subTitle: "",
        features: [
            "Titanium design.",
            "A17 Pro chip.",
            "Action button."
        ],
        heroMedia: "https://i.pinimg.com/736x/91/c5/7f/91c57f5ca068e05f4fd42b778694cc81.jpg",
        mediaType: "image",
        colors: {
            background: "#121212",
            textPrimary: "#FFFFFF",
            textSecondary: "#86868b",
            accent: "#2997ff"
        }
    },
    {
        id: 3,
        title: "iPhone 14",
        subTitle: "Plus",
        features: [
            "Big and bigger.",
            "Longest battery life.",
            "Durable design."
        ],
        heroMedia: "https://i.pinimg.com/1200x/47/ca/1e/47ca1ec9494177cd0fda9c3d009e8c01.jpg",
        mediaType: "image",
        colors: {
            background: "#0d0d0d",
            textPrimary: "#FFFFFF",
            textSecondary: "#86868b",
            accent: "#e3e3e3"
        }
    }
];

const Iphones = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            name: product.title + " " + (product.subTitle || ""),
            price: product.colors.accent === '#2997ff' ? "$999" : "$1199",
            image: product.heroMedia
        });
    };

    const handleBuyNow = (product) => {
        handleAddToCart(product);
        navigate('/cart');
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === productsConfig.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? productsConfig.length - 1 : prev - 1));
    };

    return (
        <div className="premium-slider-container">
            <button className="slider-arrow left" onClick={prevSlide}>
                <FaChevronLeft />
            </button>
            <button className="slider-arrow right" onClick={nextSlide}>
                <FaChevronRight />
            </button>

            <div
                className="premium-slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {productsConfig.map((product) => (
                    <section
                        key={product.id}
                        className="premium-slide"
                        style={{ backgroundColor: product.colors.background }}
                    >
                        {/* Background Media: Now covers the entire slide */}
                        {product.mediaType === 'video' ? (
                            <div className="video-wrapper full-page-bg">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="premium-hero-video"
                                >
                                    <source src={product.heroMedia} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : (
                            <div className="image-wrapper full-page-bg">
                                <img
                                    src={product.heroMedia}
                                    alt={`${product.title} ${product.subTitle}`}
                                    className="premium-hero-image"
                                />
                                <div
                                    className="glow-effect"
                                    style={{ background: `radial-gradient(circle, ${product.colors.accent}33 0%, transparent 70%)` }}
                                ></div>
                            </div>
                        )}

                        <div className="premium-container">
                            {/* Left Side: Title */}
                            <div className="premium-content-left">
                                <h1 style={{ color: product.colors.textPrimary }}>
                                    {product.title}
                                    <span className="subtitle" style={{ color: product.colors.textPrimary }}>
                                        {product.subTitle}
                                    </span>
                                </h1>
                            </div>

                            {/* Center Column: Now empty to allow background to show through clearly */}
                            <div className="premium-spacer"></div>

                            {/* Right Side: Features */}
                            <div className="premium-content-right">
                                {product.features.map((feature, index) => (
                                    <p
                                        key={index}
                                        style={{ color: product.colors.textSecondary }}
                                    >
                                        {feature}
                                    </p>
                                ))}

                                <div className="premium-cta">
                                    <button
                                        className="btn-buy"
                                        onClick={() => handleBuyNow(product)}
                                    >
                                        Buy Now
                                    </button>
                                    <button
                                        className="link-learn"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2997ff', fontSize: '1.2rem' }}
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart &gt;
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="premium-footer">
                            <p>Images for illustrative purposes only.</p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Iphones;
