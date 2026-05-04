import "./User.scss";
import Header from "../../components/Header/HeaderIndex.jsx";

function User() {
    return (
        <div className="profile-page">
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        Tony Jarvis!
                    </h1>
                    <button className="edit-button">Edit Name</button>
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
