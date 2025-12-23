import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                {isOpen ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

const Help = () => {
    const faqs = [
        {
            question: "Find an Apple Authorised Service Provider near you?",
            answer: "Our network of Apple Authorised Service Providers gives you lots of convenient locations for Apple repairs. They use genuine Apple parts and are trained by Apple to ensure the best service for your device."
        },
        {
            question: "Visit a Genius at an Apple Store?",
            answer: "You can do more than shop and learn in an Apple Store. Start a repair request below to make a reservation with a Genius to get help with a hardware repair."
        },
        {
            question: "Other Repair Options for Apple Products?",
            answer: "Independent Repair Providers have access to genuine Apple parts and repair resources. Independent Repair Providers do not provide repairs covered by Apple’s warranty or AppleCare plans* but may offer their own repair warranty. You can check if a provider is an Independent Repair Provider or an Apple Authorised Service Provider."
        }
    ];

    return (
        <div className="help-page">
            <div className="faq-section">
                <span className="section-label">FAQ</span>
                <h1>You've got questions, we've got <span className="blue-text">Apple Repair</span></h1>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>

            <div className="cta-banner">
                <div className="cta-content">
                    <span className="section-label-light">TESTIMONIALS</span>
                    <h2>Contacting  <span className="blue-text-light">Apple</span></h2>
                    <p>Apple.com is a convenient place to purchase Apple products and accessories from Apple. You can buy online or call 000800 040 1966. Lines are open Monday–Sunday 09:00–21:00.</p>
                    <Link to="/iphone" className="btn btn-blue-action">For Booking</Link>

                    <div className="cta-footer">
                        <div className="footer-logo">
                            <div className="rio-dot"></div>
                            <span>APPLE STORE</span>
                        </div>
                        <p className="footer-tagline">Copyrights © 2025 Arun Loganathan</p>
                        <div className="footer-links-minimal">
                            <span>About</span>
                            <span>Contact</span>
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="help-bottom-legal">
                <span>Designed by Arun Loganathan</span>
            </div>
        </div>
    );
};

export default Help;
