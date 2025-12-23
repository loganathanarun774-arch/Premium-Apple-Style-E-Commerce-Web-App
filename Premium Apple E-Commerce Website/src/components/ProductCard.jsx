import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
    };

    return (
        <div className="product-card">
            <div className="card-image-wrapper">
                <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-tagline">{product.tagline}</p>
                <p className="card-price">From {product.price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={handleAdd}>Add to Cart</button>
                    <Link to="/cart" className="link-arrow">Buy Now &gt;</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

