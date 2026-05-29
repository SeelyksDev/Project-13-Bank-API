import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import Footer from "./layout/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { loginSuccess, profileSuccess } from "./features/auth/authSlice";
import { profileApi } from "./features/auth/profileApi";
import "./styles/_normalize.scss";

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(loginSuccess({ token }));
            profileApi(token).then(({ firstName, lastName }) => {
                dispatch(profileSuccess({ firstName, lastName }));
                setLoading(false);
            });
        } else {
            setTimeout(() => setLoading(false), 0);
        }
    }, [dispatch]);

    if (loading) return null;

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
