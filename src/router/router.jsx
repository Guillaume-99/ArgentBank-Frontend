import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import SignIn from "../pages/SignIn.jsx";
import Profile from "../pages/Profile.jsx";

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
                path: "profile",
                element: <Profile />,
            },
        ],
    },
]);

export default router;
