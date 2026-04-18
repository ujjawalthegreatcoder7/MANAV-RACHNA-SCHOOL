import "../styles/navbar.css";
import logo from '../logoo.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">

                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="TCF Logo" className="logo-circle me-2" />
                </Link>

                {/* Hamburger menu */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/vision">Vision</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/why">Why TCF</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About TCF</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/organiser">Organiser</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;