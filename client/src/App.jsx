import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";
import "./styles/_normalize.scss";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route />
                <Route />*/}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
