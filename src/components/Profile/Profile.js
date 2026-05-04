// src/components/Profile.js
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "../features/user/userSlice";

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleLogin = () => {
        dispatch(
            loginSuccess({
                firstName: "Tony",
                lastName: "Stark",
                token: "abc123",
            }),
        );
    };

    return (
        <div>
            <h2>Profil</h2>

            {user.isAuthenticated ? (
                <>
                    <p>
                        Bienvenue {user.firstName} {user.lastName}
                    </p>
                    <button onClick={() => dispatch(logout())}>Se déconnecter</button>
                </>
            ) : (
                <button onClick={handleLogin}>Se connecter</button>
            )}
        </div>
    );
}

export default Profile;
