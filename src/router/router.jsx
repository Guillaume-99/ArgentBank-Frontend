import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home/Home.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import User from "../pages/User/User.jsx";
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
                path: "signin",
                element: <SignIn />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "user",
                        element: <User />,
                    },
                ],
            },
        ],
    },
]);

export default router;
