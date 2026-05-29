import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    loginSuccess,
    profileSuccess,
    loginFailure,
} from "../../features/auth/authSlice";
import { loginApi } from "../../features/auth/loginApi";
import { profileApi } from "../../features/auth/profileApi";
import "./SignIn.scss";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            const { token } = await loginApi(email, password);

                            dispatch(loginSuccess({ token }));

                            const { firstName, lastName } =
                                await profileApi(token);
                            dispatch(profileSuccess({ firstName, lastName }));
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={password}
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
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
