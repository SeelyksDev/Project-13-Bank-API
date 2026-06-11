import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    loginSuccess,
    profileSuccess,
    loginFailure,
    clearError,
} from "../../features/auth/authSlice";
import { loginApi } from "../../features/auth/loginApi";
import { profileApi } from "../../features/auth/profileApi";
import "./SignIn.scss";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const apiError = useSelector((state) => state.auth.error);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();

                        if (!email.trim() || !password.trim()) {
                            setFormError(true);
                            return;
                        }
                        setFormError(false);

                        try {
                            const { token } = await loginApi(email, password);
                            dispatch(loginSuccess({ token }));

                            if (rememberMe) {
                                localStorage.setItem("token", token);
                            } else {
                                localStorage.removeItem("token");
                            }

                            const { firstName, lastName } =
                                await profileApi(token);
                            dispatch(profileSuccess({ firstName, lastName }));
                            navigate("/profile");
                        } catch (err) {
                            dispatch(loginFailure(err.message));
                        }
                    }}
                >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="email"
                            value={email}
                            id="username"
                            style={{
                                border:
                                    formError && !email.trim()
                                        ? "2px solid red"
                                        : "",
                            }}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                dispatch(clearError());
                            }}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={password}
                            id="password"
                            style={{
                                border:
                                    formError && !password.trim()
                                        ? "2px solid red"
                                        : "",
                            }}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                dispatch(clearError());
                            }}
                        />
                    </div>
                    {formError && (
                        <p style={{ color: "red" }}>
                            Veuillez remplir tous les champs
                        </p>
                    )}
                    {apiError && <p style={{ color: "red" }}>{apiError}</p>}

                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignIn;
