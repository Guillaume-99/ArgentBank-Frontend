import "./Profil.scss";
import Header from "../../components/Header/HeaderIndex.jsx";
import UserEdit from "../../components/UserEdit/UserEdit.jsx";
import Account from "../../components/Account/Account.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function User() {
    const profile = useSelector((state) => state.user.profile);
    useEffect(() => {
        document.title = "Argent Bank | Profile";
    }, []);
    return (
        <div className="profile-page">
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <UserEdit />
                </div>
                <Account
                    accounts={[
                        {
                            title: "Argent Bank Checking (x8349)",
                            amount: "$2,082.79",
                            description: "Available Balance",
                        },
                        {
                            title: "Argent Bank Savings (x6712)",
                            amount: "$10,928.42",
                            description: "Available Balance",
                        },
                        {
                            title: "Argent Bank Credit Card (x8349)",
                            amount: "$184.30",
                            description: "Current Balance",
                        },
                    ]}
                />
            </main>
        </div>
    );
}

export default User;
