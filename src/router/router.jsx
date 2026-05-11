import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Profil from "../pages/Profil/Profil.jsx";
import ProtectedRoute from "./securyPass.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "profil",
                        element: <Profil />,
                    },
                ],
            },
        ],
    },
]);

export default router;
