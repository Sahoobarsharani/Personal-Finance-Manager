import React, { useState } from 'react';

const Home = () => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
    const [showContactForm, setShowContactForm] = useState(false);
    const [showTrustSection, setShowTrustSection] = useState(false);

    const handleButtonClick = () => {
        setShowWelcomeMessage(false);
    };

    const handleContactClick = () => {
        setShowContactForm(true);
    };

    const handleContactClose = () => {
        setShowContactForm(false);
    };

    const handleTrustClick = () => {
        setShowTrustSection(true);
    };

    const handleTrustClose = () => {
        setShowTrustSection(false);
    };

    return (
        <div className="home-container">
            {showWelcomeMessage && (
                <div className="welcome-message">
                    <h1>Welcome to Your Personal Finance Manager</h1>
                    <p>Track your income and expenses easily!</p>
                    <button onClick={handleButtonClick}>Get Started</button>
                </div>
            )}

            {!showWelcomeMessage && (
                <div className="main-content">
                    <h2>Manage Your Finances</h2>
                    <p>This is where you'll see your financial overview. We'll add more features here later.</p>
                    <div className="feature-placeholder">
                        <p>Income: ₹0</p>
                        <p>Expenses: ₹0</p>
                    </div>

                    <button className="trust-button" onClick={handleTrustClick}>Why Trust Us?</button>

                    {showTrustSection && (
                        <div className="trust-overlay">
                            <div className="trust-section">
                                <h3>Why Trust Us?</h3>
                                <ul>
                                    <li><strong>Secure Data Handling:</strong> Your financial data is encrypted and protected.</li>
                                    <li><strong>Transparent Practices:</strong> We believe in transparency.</li>
                                    <li><strong>Dedicated Support:</strong> Our support team is here to help.</li>
                                    <li><strong>User-Focused Development:</strong> We're constantly improving.</li>
                                </ul>
                                <button className="trust-close" onClick={handleTrustClose}>Close</button>
                            </div>
                        </div>
                    )}

                    <button className="contact-button" onClick={handleContactClick}>Contact Us</button>
                </div>
            )}

            {showContactForm && (
                <div className="contact-overlay">
                    <div className="contact-form">
                        <h2>Contact Us</h2>
                        <p>Have questions or feedback? Send us a message!</p>
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                        <button className="contact-close" onClick={handleContactClose}>Close</button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .home-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Center horizontally */
                    justify-content: center; /* Center vertically */
                    min-height: 100vh;
                    padding: 20px;
                    font-family: sans-serif;
                    background-color: #f8f8f8;
                }

                .welcome-message, .main-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Center horizontally */
                    justify-content: center; /* Center vertically */
                    text-align: center; /* Center text within elements */
                    background-color: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    margin-bottom: 20px;
                    transition: transform 0.2s ease;
                }

                .welcome-message:hover, .main-content:hover {
                    transform: translateY(-5px);
                }

                button {
                    background-color: #007bff;
                    color: white;
                    padding: 12px 25px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    margin-top: 15px;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                button:hover {
                    background-color: #0056b3;
                    transform: translateY(-2px);
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
                }

                .feature-placeholder {
                    border: 1px dashed #ccc;
                    padding: 20px;
                    margin-top: 20px;
                    text-align: left;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }

                .trust-button {
                    /* ... (styles are the same) */
                }

                .trust-overlay {
                    /* ... (styles are the same) */
                }

                .trust-section {
                    /* ... (styles are the same) */
                }

                .trust-section h3 {
                    /* ... (styles are the same) */
                }

                .trust-section ul {
                    /* ... (styles are the same) */
                }

                .trust-section li {
                    /* ... (styles are the same) */
                }

                .trust-section strong {
                    /* ... (styles are the same) */
                }

                .trust-close {
                    /* ... (styles are the same) */
                }

                .contact-button {
                    /* ... (styles are the same) */
                }

                .contact-overlay {
                    /* ... (styles are the same) */
                }

                .contact-form {
                    /* ... (styles are the same) */
                }

                .contact-form input, .contact-form textarea {
                    /* ... (styles are the same) */
                }

                .contact-form button[type="submit"] {
                    /* ... (styles are the same) */
                }

                .contact-close {
                    /* ... (styles are the same) */
                }
            `}</style>
        </div>
    );
};

export default Home;