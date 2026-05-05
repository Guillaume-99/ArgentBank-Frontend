import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    const token = localStorage.getItem("token");
    console.log("Token stocké:", token);
    const profile = JSON.parse(localStorage.getItem("profile"));
    console.log("Profile stocké:", profile);
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
