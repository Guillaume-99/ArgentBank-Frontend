function Account({ accounts }) {
    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <div className="account" key={index}>
                    <div className="account__content--wrapper">
                        <h3 className="account__title">{account.title}</h3>
                        <p className="account__amount">{account.amount}</p>
                        <p className="account__amount--description">{account.description}</p>
                    </div>
                    <div className="account__content--wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Account;
