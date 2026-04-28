import { useState } from "react";
import "./User.scss";

function User() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="main bg-dark">
            {!isOpen ? (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        Tony Jarvis!
                    </h1>
                    <button
                        className="edit-button"
                        onClick={() => setIsOpen(true)}
                    >
                        Edit Name
                    </button>
                </div>
            ) : (
                <div className="header">
                    <h1>Welcome back</h1>
                    <form>
                        {" "}
                        {/*onSubmit={}*/}
                        <div className="inputs-wrapper">
                            <input type="text" id="firstname" placeholder="Tony"/>
                            <input type="text" id="lastname" placeholder="Jarvis"/>
                        </div>
                        <div className="buttons-wrapper">
                            <button className="edit-name-btn" type="submit">Save</button>
                             <button className="edit-name-btn" type="button" onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Checking (x8349)
                    </h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Savings (x6712)
                    </h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Credit Card (x8349)
                    </h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">
                        Current Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
        </main>
    );
}

export default User;
