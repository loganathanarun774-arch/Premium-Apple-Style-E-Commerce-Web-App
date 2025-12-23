import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', '').replace('From ', ''));
            return total + price * item.quantity;
        }, 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1>Your Bag</h1>

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your bag is empty.</p>
                        <Link to="/" className="btn btn-primary">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="cart-items-list">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-price">{item.price}</p>
                                        <div className="quantity-controls">
                                            <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity"><FaMinus /></button>
                                            <span className="quantity-count">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity"><FaPlus /></button>
                                        </div>
                                    </div>
                                    <div className="cart-item-actions">
                                        <button className="remove-btn" onClick={() => removeFromCart(item.id)} title="Remove item">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <div className="summary-row">
                                <span>Total</span>
                                <span className="total-price">${calculateTotal()}</span>
                            </div>
                            <div className="cart-btns">
                                <button className="btn btn-outline" onClick={clearCart}>Clear Bag</button>
                                <button className="btn btn-primary">Check Out</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;

