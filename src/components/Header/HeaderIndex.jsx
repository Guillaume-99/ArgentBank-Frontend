import "./HeaderIndex.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="header__nav">
                <NavLink className="header__nav--logo" to="/">
                    <img className="header__nav--logo-image" src="/images/argentBankLogo.png" alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                <div>
                    <NavLink className="header__nav--item" to="/signIn">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
