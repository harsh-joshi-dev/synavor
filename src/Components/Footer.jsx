import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto container-padding py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
                    {/* Column 1 - Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <img
                                src="/assets/logo.png"
                                alt="Synavor"
                                className="h-12 w-auto mr-4"
                            />
                            <span className="text-2xl font-bold text-white">Synavor</span>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-400 mb-6 max-w-md">
                            We empower businesses with innovative AI/ML technology solutions, 
                            driving transformation and efficiency across industries through 
                            intelligent procurement and supply chain optimization.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-300">contact@synavor.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-300">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-300">San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Solutions</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                    <span>Procurement Optimization</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                    <span>Supply Chain Analytics</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                    <span>AI-Powered Forecasting</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                    <span>Risk Management</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/AboutUs" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                    <span>About Us</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                    <span>Careers</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                    <span>Newsroom</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="/ContactUs" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                    <span>Contact</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 pt-12 border-t border-gray-800">
                    <div className="max-w-2xl">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Stay Updated with Industry Insights
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Get the latest procurement and supply chain insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                            />
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-gray-950">
                <div className="max-w-7xl mx-auto container-padding py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Synavor. All rights reserved.
                        </div>
                        
                        {/* Social Media & Legal Links */}
                        <div className="flex items-center space-x-6">
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg">
                                    <Facebook size={20} />
                                </a>
                            </div>
                            
                            <div className="w-px h-6 bg-gray-700"></div>
                            
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
