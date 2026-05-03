import { useState } from "react";
import UserAccountData from "../../data/account-data.json";
import "./User.scss";
import Account from "../../components/Account/Account";

function User() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="main bg-dark">
            <div className="header">
                {!isOpen ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <h1>Welcome back</h1>
                        <form>
                            {/*onSubmit={}*/}
                            <div className="inputs-wrapper">
                                <input
                                    type="text"
                                    id="firstname"
                                    placeholder="Tony"
                                />
                                <input
                                    type="text"
                                    id="lastname"
                                    placeholder="Jarvis"
                                />
                            </div>
                            <div className="buttons-wrapper">
                                <button className="edit-name-btn" type="submit">
                                    Save
                                </button>
                                <button
                                    className="edit-name-btn"
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>

            <h2 className="sr-only">Accounts</h2>
            {UserAccountData.map((accountData) => (
                <Account accountData={accountData} key={accountData.id} />
            ))}
        </main>
    );
}

export default User;
