import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, User, Users, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeClass = ({ isActive }) =>
        isActive ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 font-medium";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-custom shadow-large border-b border-gray-100"
                : "bg-white/80 backdrop-blur-custom"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 justify-between items-center">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center space-x-3 group">
                        <img
                            src="/logotry.png"
                            alt="Synavor"
                            className="h-10 transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="text-2xl font-semibold block sm:text-2xl sm:font-bold" style={{ color: "#052840" }}>
                            Synavor
                        </span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-10">
                        <div className="flex gap-6 mr-24">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : "text-gray-700 hover:text-blue-600"}>
                                Home
                            </NavLink>
                            <NavLink to="/solutions" className={({ isActive }) => isActive ? activeClass : "text-gray-700 hover:text-blue-600"}>
                                Solutions
                            </NavLink>
                            <NavLink to="/who-we-help" className={({ isActive }) => isActive ? activeClass : "text-gray-700 hover:text-blue-600"}>
                                Who We Help
                            </NavLink>
                            <NavLink to="/AboutUs" className={({ isActive }) => isActive ? activeClass : "text-gray-700 hover:text-blue-600"}>
                                Why Synavor
                            </NavLink>
                            <div
                                className="relative"
                                onMouseEnter={() => setOpenMenu(true)}
                                onMouseLeave={() => setOpenMenu(false)}
                            >
                                {/* Company Link */}
                                <span className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium">
                                    Company
                                </span>

                                {/* Submenu */}
                                {openMenu && (
                                    <div
                                        className="absolute -mb-1 left-[-70px] bg-white shadow-xl rounded-xl py-4 w-64 z-50
             transition-all duration-300 ease-out opacity-100 scale-100"
                                        style={{ transformOrigin: "top" }}
                                    >
                                        {/* About */}
                                        <NavLink
                                            to="/aboutUs"
                                            onClick={() => setOpenMenu(false)}
                                            className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                        >
                                            <User className="w-5 h-5 text-blue-600 mt-1" />
                                            <div>
                                                <p className="text-gray-900 font-semibold text-sm">About</p>
                                                <p className="text-gray-500 text-xs">Learn more about our company and mission.</p>
                                            </div>
                                        </NavLink>

                                        {/* Leadership */}
                                        <NavLink
                                            to="/Leadership"
                                            onClick={() => setOpenMenu(false)}
                                            className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                        >
                                            <Users className="w-5 h-5 text-blue-600 mt-1" />
                                            <div>
                                                <p className="text-gray-900 font-semibold text-sm">Leadership</p>
                                                <p className="text-gray-500 text-xs">Meet our executive team and key leaders.</p>
                                            </div>
                                        </NavLink>

                                        {/* Contact */}
                                        <NavLink
                                            to="/contactUs"
                                            onClick={() => setOpenMenu(false)}
                                            className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                        >
                                            <Phone className="w-5 h-5 text-blue-600 mt-1" />
                                            <div>
                                                <p className="text-gray-900 font-semibold text-sm">Contact</p>
                                                <p className="text-gray-500 text-xs">Get in touch with our team for support or inquiries.</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="btn-primary">Request Demo</button>
                            <NavLink
                                to="/login"
                                className="text-gray-700 hover:text-blue-600 font-medium"
                            >
                                Login
                            </NavLink>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-blue-600 font-medium"
                            >
                                Support
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            {isOpen ? (
                                <X size={24} className="text-gray-700" />
                            ) : (
                                <Menu size={24} className="text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {
                isOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-custom border-t border-gray-100 shadow-large">
                        <div className="px-6 py-6 space-y-4">
                            <NavLink
                                to="/"
                                className="block py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/solutions"
                                className="block py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Solutions
                            </NavLink>
                            <NavLink
                                to="/who-we-help"
                                className="block py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Who We Help
                            </NavLink>
                            <NavLink
                                to="/AboutUs"
                                className="block py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="/company"
                                className="block py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Company
                            </NavLink>

                            <div className="pt-4 border-t border-gray-200 space-y-3">
                                <NavLink
                                    to="/login"
                                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Login
                                </NavLink>
                                <a
                                    href="#"
                                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                                >
                                    Support
                                </a>
                                <button className="w-full btn-primary mt-4">
                                    Request Demo
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </nav >
    );
}
