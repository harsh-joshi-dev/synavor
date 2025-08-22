import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//pages
import Login from "./Pages/Login";
import Solution from './Pages/Solution'
import WhoWeHelp from './Pages/WhoWeHelp'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import Home from "./Pages/Home";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="pt-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/solutions" element={<Solution />} />
                        <Route path="/who-we-help" element={<WhoWeHelp />} />
                        <Route path="/ContactUs" element={<ContactUs />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
