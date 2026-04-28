import Header from "./components/Header/HeaderIndex.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
