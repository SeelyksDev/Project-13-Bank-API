import { NavLink } from "react-router-dom";
import Logo from "../../assets/png/logo.png";
import "./Header.scss";

function Header() {
    return (
        <nav className="main-nav">
            <NavLink to="/" title="Accueil" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink
                    to="/connexion"
                    className="main-nav-item"
                    title="Connexion"
                >
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;
