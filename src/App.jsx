import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    const token = localStorage.getItem("token");
    const profile = JSON.parse(localStorage.getItem("profile"));

    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
