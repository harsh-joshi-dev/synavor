import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-custom shadow-large border-b border-gray-100' 
                : 'bg-white/80 backdrop-blur-custom'
        }`}>
            <div className="max-w-7xl mx-auto container-padding">
                <div className="flex h-20 justify-between">
                    {/* Logo */}
                    <div className="flex items-center w-[150px] ">
                        <NavLink to="/" className="group">
                            <div className="flex items-center space-x-3">
                                <img 
                                    src="/logot.png"
                                    alt="Synavor" 
                                    className="h-12 transition-transform duration-300 group-hover:scale-105" 
                                />
                                {/* <span className="text-xl font-bold text-gray-900 hidden sm:block">
                                    Synavor
                                </span> */}
                            </div>
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex justify-between items-center   space-x-40">
                      
                      <div className="hidden lg:flex space-x-8 ">
                          <NavLink to="/" className={`${activeClass} transition-colors duration-200`}>
                            Home
                        </NavLink>
                        <NavLink to="/solutions" className={`${activeClass} transition-colors duration-200`}>
                            Solutions
                        </NavLink>
                        <NavLink to="/who-we-help" className={`${activeClass} transition-colors duration-200`}>
                            Who We Help
                        </NavLink>
                        <NavLink to="/AboutUs" className={`${activeClass} transition-colors duration-200`}>
                            About Us
                        </NavLink>
                      </div>
                        
                        <div className="flex space-x-4 items-center">
                            <NavLink 
                                to="/login" 
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                Login
                            </NavLink>
                            <div className="w-px h-6 bg-gray-300"></div>
                            <a 
                                href="#" 
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                Support
                            </a>


                             <button className="btn-primary ">
                            Request Demo
                        </button>
                        </div>

                       
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-custom border-t border-gray-100 shadow-large">
                    <div className="container-padding py-6 space-y-4">
                        <NavLink 
                            to="/" 
                            className={`block py-2 ${activeClass} transition-colors duration-200`}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/solutions" 
                            className={`block py-2 ${activeClass} transition-colors duration-200`}
                            onClick={() => setIsOpen(false)}
                        >
                            Solutions
                        </NavLink>
                        <NavLink 
                            to="/who-we-help" 
                            className={`block py-2 ${activeClass} transition-colors duration-200`}
                            onClick={() => setIsOpen(false)}
                        >
                            Who We Help
                        </NavLink>
                        <NavLink 
                            to="/AboutUs" 
                            className={`block py-2 ${activeClass} transition-colors duration-200`}
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </NavLink>
                        
                        <div className="pt-4 border-t border-gray-200 space-y-3">
                            <NavLink 
                                to="/login" 
                                className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </NavLink>
                            <a 
                                href="#" 
                                className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                Support
                            </a>
                            <button className="w-full btn-primary mt-4">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
