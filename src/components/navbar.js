import "../styles/navbar.css";
import logo from '../logoo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="TCF Logo" className="logo-circle me-2" />
        </a>

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
                            <a className="nav-link text-white" href="home">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#vision">Vision</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#why">Why TCF</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">About TCF</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#features">What We Bring</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#organiser">Organiser</a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;