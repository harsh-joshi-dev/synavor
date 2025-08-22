import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Shield, Users, TrendingUp, Zap } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Side - Login Form */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md"
                >
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center space-x-3">
                            <img
                                src="/assets/logo.png"
                                alt="Synavor Logo"
                                className="h-12 w-auto"
                            />
                            <span className="text-2xl font-bold text-gray-900">Synavor</span>
                        </div>
                    </div>

                    {/* Welcome Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-lg text-gray-600">
                            Sign in to your account to continue
                        </p>
                    </div>

                    {/* Enhanced Form */}
                    <div className="bg-white rounded-2xl shadow-large border border-gray-100 p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full btn-primary py-3 text-base font-semibold"
                            >
                                Sign In
                            </motion.button>
                        </form>

                        {/* Divider */}
                        <div className="mt-8 flex items-center">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="px-4 text-sm text-gray-500">or</span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>

                        {/* Social Login */}
                        <div className="mt-6 space-y-3">
                            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200">
                                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                Continue with Google
                            </button>
                        </div>

                        {/* Register Link */}
                        <p className="mt-8 text-center text-sm text-gray-600">
                            Don't have an account?{" "}
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
                                Sign up
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Right Side - Feature Showcase */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center px-12 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-lg"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Transform Your Procurement Operations
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Access powerful AI-driven insights, real-time analytics, and intelligent automation 
                            to optimize your supply chain and drive business growth.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">AI-Powered Insights</h3>
                                    <p className="text-blue-100">Get intelligent recommendations and predictive analytics</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Real-time Analytics</h3>
                                    <p className="text-blue-100">Monitor performance and track KPIs in real-time</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Secure & Reliable</h3>
                                    <p className="text-blue-100">Enterprise-grade security with 99.9% uptime</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
