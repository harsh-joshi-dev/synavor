import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Send, Building, Users, Globe } from "lucide-react"

const contacts = [
    {
        title: "Sales",
        description:
            "For sales inquiries, demo requests and product information, please email us.",
        email: "sales@synavor.com",
        image:
            "/assets/Contact/sale.jpg",
    },
    {
        title: "Careers",
        description:
            "We’re not hiring right now, but we're always open to connecting with talented individuals who share our passion.",
        email: "careers@synavor.com",
        image:
            "/assets/Contact/car.jpg",
    },
    {
        title: "Support",
        description:
            "For technical or account support, please email us.",
        email: "support@synavor.com",
        image:
            "/assets/Contact/sup.jpg",
    },
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interest: "general"
    });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`Thank you, ${formData.name}! Your message has been sent.`);
    //     setFormData({ name: "", email: "", company: "", phone: "", message: "", interest: "general" });
    // };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="gradient-bg section-padding">
                <div className="max-w-7xl mx-auto container-padding text-center">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6"
                    >
                        <Mail className="w-4 h-4 mr-2" />
                        Get In Touch
                    </motion.div> */}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Let's <span className="text-gradient">Connect</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to transform your procurement operations? Our team of experts is here to help
                        you unlock the full potential of AI-powered supply chain solutions.
                    </p>
                </div>
            </section>

            <section className="bg-white text-gray-900 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contacts.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                            >
                                {/* Image */}
                                <div className="h-52 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <a
                                        href={`mailto:${item.email}`}
                                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                                    >
                                        <Mail className="w-5 h-5" />
                                        {item.email}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            {/* <section className="bg-white section-padding">
                <div className="max-w-6xl mx-auto container-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Get Started Today
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Whether you have questions about our solutions, want to schedule a demo,
                                    or need technical support, we're here to help you succeed.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                                        <p className="text-gray-600">contact@synavor.com</p>
                                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM PST</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                                        <p className="text-gray-600">San Francisco, CA</p>
                                        <p className="text-sm text-gray-500">Schedule an in-person meeting</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-large border border-gray-100 p-8"
                        >
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                            placeholder="Enter company name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                            placeholder="Enter phone number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                                        I'm interested in
                                    </label>
                                    <select
                                        name="interest"
                                        id="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="demo">Product Demo</option>
                                        <option value="pricing">Pricing Information</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full btn-primary group"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section> */}


            {/* Stats Section */}
            {/* <section className="bg-gray-50 section-padding">
                <div className="max-w-7xl mx-auto container-padding">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Building className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                            <p className="text-gray-600">Companies Served</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
                            <p className="text-gray-600">Customer Support</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
                            <p className="text-gray-600">Countries Reached</p>
                        </motion.div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}
