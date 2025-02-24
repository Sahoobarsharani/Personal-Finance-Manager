import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/transactions" className="nav-link">Transactions</Link>
                <Link to="/reports" className="nav-link">Reports</Link>
            </div>

            <style jsx>{`
                .navbar {
                    background-color: blue; /* Blue navbar */
                    color: white;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between; /* Distribute space */
                    align-items: center;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                }

                .nav-content {
                    display: flex;
                    align-items: center;
                }

                .nav-link {
                    color: white;
                    text-decoration: none;
                    padding: 0.8rem 1.4rem;
                    margin: 0 10px;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }

                .nav-link:hover {
                    background-color: #0056b3; /* Darker blue on hover */
                    transform: translateY(-3px);
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
                }

                .nav-link.active {
                    background-color: #ADD8E6; /* Light blue for active */
                    color: #333;
                    font-weight: 500;
                }

                /* Responsive styles (optional, but recommended) */
                @media (max-width: 768px) {
                    .nav-content {
                        flex-direction: column;  /* Stack vertically on smaller screens */
                        align-items: flex-start; /* Align to the left */
                    }

                    .nav-link {
                        margin: 5px 0;
                        width: 100%; /* Full width on smaller screens */
                        text-align: center;
                    }
                    .navbar {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;