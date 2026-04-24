import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src="/images/argentBankLogo.png" alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                <div>
                    <NavLink className="main-nav-item" to="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
