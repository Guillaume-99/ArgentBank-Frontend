import Header from "../../components/Header/HeaderIndex";
import "./Login.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../Features/User/UserApi";
import { loginSuccess } from "../../Features/User/UserSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function SignIn() {
    const token = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(false);

        try {
            const token = await login(username, password);
            const profile = await getUser(token);

            if (rememberMe) {
                localStorage.setItem("remember-me", "true");
                localStorage.setItem("token", token);
                localStorage.setItem("profile", JSON.stringify(profile));
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("profile");
            } else {
                localStorage.setItem("remember-me", "false");
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("profile", JSON.stringify(profile));
                localStorage.removeItem("token");
                localStorage.removeItem("profile");
            }

            dispatch(loginSuccess({ token, profile }));
        } catch (error) {
            setErrorMessage(true);
        }
    };

    useEffect(() => {
        document.title = "Argent Bank | Login";
        if (token) {
            navigate("/profil");
        }
    }, [token, navigate]);

    return (
        <div className="sign-in-page">
            <Header />
            <main className=" main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        {errorMessage && (
                            <div>
                                <p className="error-message">Login ou mot de passe incorrect</p>
                            </div>
                        )}

                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default SignIn;
