import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import Logo from "../../assets/png/logo.png";
import "./Header.scss";

function Header() {
    const dispatch = useDispatch();
    const location = useLocation();
    const isProfilePage = location.pathname === "/profile";
    const firstName = useSelector((state) => state.auth.firstName);

    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" title="Accueil" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div className="wrapper-links">
                    {isProfilePage ? (
                        <span className="main-nav-item nav-no-link">
                            <i className="fa fa-user-circle"></i>
                            {firstName}
                        </span>
                    ) : (
                        <NavLink
                            to="/login"
                            className="main-nav-item"
                            title="Connexion"
                        >
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    )}

                    {isProfilePage && (
                        <NavLink
                            to="/"
                            className="main-nav-item sign-out-btn"
                            title="Accueil"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(logout());
                            }}
                        >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
