import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from './ProductCard';

const Carousel = ({ products }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.clientWidth * 0.8; // Scroll 80% of width
            const targetScroll = direction === 'left'
                ? current.scrollLeft - scrollAmount
                : current.scrollLeft + scrollAmount;

            current.scrollTo({
                left: targetScroll,
                behavior: 'smooth' // ease-in-out handled by browser
            });
        }
    };

    return (
        <div className="carousel-wrapper">
            <button
                className="carousel-btn left"
                onClick={() => scroll('left')}
                aria-label="Scroll Left"
            >
                <FaChevronLeft />
            </button>

            <div className="carousel-container" ref={scrollRef}>
                {products.map((product) => (
                    <div key={product.id} className="carousel-item">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <button
                className="carousel-btn right"
                onClick={() => scroll('right')}
                aria-label="Scroll Right"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Carousel;
