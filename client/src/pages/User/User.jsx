import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserAccountData from "../../data/account-data.json";
import Account from "../../components/Account/Account";
import { updateProfileApi } from "../../features/auth/updateProfileApi";
import { profileSuccess } from "../../features/auth/authSlice";
import "./User.scss";

function User() {
    const firstName = useSelector((state) => state.auth.firstName);
    const lastName = useSelector((state) => state.auth.lastName);
    const token = useSelector((state) => state.auth.token);
    const [isOpen, setIsOpen] = useState(false);
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    return (
        <main className="main bg-dark">
            <div className="header">
                {!isOpen ? (
                    <>
                        <h1>
                            <span className="welcome">Welcome back</span>
                            <br />
                            <span className="firstname">{firstName}</span>
                            <span className="lastname">{lastName}</span>!
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
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                if (
                                    !newFirstName.trim() ||
                                    !newLastName.trim()
                                ) {
                                    setError(true);
                                    return;
                                }
                                setError(false);
                                const { firstName, lastName } =
                                    await updateProfileApi(
                                        token,
                                        newFirstName,
                                        newLastName,
                                    );
                                dispatch(
                                    profileSuccess({ firstName, lastName }),
                                );
                                setIsOpen(false);
                            }}
                        >
                            <div className="inputs-wrapper">
                                <input
                                    type="text"
                                    id="firstname"
                                    placeholder="John"
                                    value={newFirstName}
                                    style={{
                                        border:
                                            error && !newFirstName.trim()
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    onChange={(e) =>
                                        setNewFirstName(e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    id="lastname"
                                    placeholder="Doe"
                                    value={newLastName}
                                    style={{
                                        border:
                                            error && !newLastName.trim()
                                                ? "2px solid red"
                                                : "",
                                    }}
                                    onChange={(e) =>
                                        setNewLastName(e.target.value)
                                    }
                                />
                            </div>
                            {error && (
                                <p style={{ color: "red" }}>
                                    Veuillez remplir les champs
                                </p>
                            )}
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
