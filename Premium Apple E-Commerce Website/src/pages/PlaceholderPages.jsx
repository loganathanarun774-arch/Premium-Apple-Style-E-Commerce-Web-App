import React from 'react';

const SimplePage = ({ title, content }) => (
    <div className="simple-page">
        <div className="container">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
);

export const About = () => <SimplePage title="About Us" content="We are dedicated to bringing you the best technology." />;
export const Iphone = () => <SimplePage title="All iPhones" content="Explore our complete lineup of iPhones." />;
