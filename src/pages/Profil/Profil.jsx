import "./Profil.scss";
import Header from "../../components/Header/HeaderIndex.jsx";
import UserEdit from "../../components/UserEdit/UserEdit.jsx";
import { useSelector } from "react-redux";

function User() {
    const profile = useSelector((state) => state.user.profile);
    return (
        <div className="profile-page">
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <UserEdit />
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account__content--wrapper">
                        <h3 className="account__title">Argent Bank Checking (x8349)</h3>
                        <p className="account__amount">$2,082.79</p>
                        <p className="account__amount--description">Available Balance</p>
                    </div>
                    <div className="account__content--wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account__content--wrapper">
                        <h3 className="account__title">Argent Bank Savings (x6712)</h3>
                        <p className="account__amount">$10,928.42</p>
                        <p className="account__amount--description">Available Balance</p>
                    </div>
                    <div className="account__content--wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account__content--wrapper">
                        <h3 className="account__title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account__amount">$184.30</p>
                        <p className="account__amount--description">Current Balance</p>
                    </div>
                    <div className="account__content--wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default User;
