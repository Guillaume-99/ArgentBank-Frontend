import "./HeaderIndex.scss";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Features/User/UserSlice";
import { use } from "react";
const Header = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    const navigate = useNavigate();
    const rememberMeChecked = localStorage.getItem("remember-me") === "true";
    const storage = rememberMeChecked ? localStorage : sessionStorage;
    const storedToken = storage.getItem("token");
    const token = storedToken || null;

    const handleLogout = () => {
        storage.removeItem("token");
        storage.removeItem("profile");
        dispatch(logout());
    };
    return (
        <header>
            <nav className="header__nav">
                <NavLink className="header__nav--logo" to="/">
                    <img className="header__nav--logo-image" src="/img/argentBankLogo.webp" alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                <div>
                    {token ? (
                        <>
                            <NavLink className="header__nav--item" to="/profil">
                                <i className="fa fa-user-circle"></i>
                                {profile?.firstName}
                            </NavLink>

                            <Link className="header__nav--item" onClick={handleLogout} to="/login">
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <NavLink className="header__nav--item" to="/login">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
