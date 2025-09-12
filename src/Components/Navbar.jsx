import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Users,
  Phone,
  Package,
  TrendingDown,
  User2,
  FileBarChart,
  Target,
  TrendingUp,
  Handshake,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSolution, setOpenSolution] = useState(false);
  const [openWhoWeHelp, setOpenWhoWeHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeClass = "text-blue-600 font-bold";

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
          <NavLink to="/" className="flex items-center space-x-3 group -ml-7">
            <img
              src="/SynavorLogo.svg"
              alt="Synavor"
              className="h-30 transition-transform duration-300 group-hover:scale-105"
            />
            {/* <span className="text-2xl font-semibold block sm:text-3xl sm:font-bold transition-transform duration-300 group-hover:scale-105" style={{ color: "#052840" }}>
                            Synavor
                        </span> */}
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-6 mr-56">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : "text-gray-700 hover:text-blue-600"
                }
              >
                Home
              </NavLink>
              <div
                className="relative"
                onMouseEnter={() => setOpenSolution(true)}
                onMouseLeave={() => setOpenSolution(false)}
              >
                {/* Company Link */}
                <NavLink
                  to="/solutions"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : "cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
                  }
                >
                  Solutions
                </NavLink>

                {/* Submenu */}
                {openSolution && (
                  <div
                    className="absolute -mb-1 left-[-70px] bg-white shadow-xl rounded-xl py-4 w-64 z-50
             transition-all duration-300 ease-out opacity-100 scale-100"
                    style={{ transformOrigin: "top" }}
                  >
                    <NavLink
                      to="/solutions?solution=0"
                      onClick={() => {
                        setOpenSolution(false);
                        // Scroll to the solution section after navigation
                        setTimeout(() => {
                          const element = document.querySelector('[data-solution="inventory-controls-and-management"]');
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      }}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <Package className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Inventory Controls & Management
                        </p>
                        <p className="text-gray-500 text-xs">
                          AI-powered inventory optimization
                        </p>
                      </div>
                    </NavLink>

                    <NavLink
                      to="/solutions?solution=1"
                      onClick={() => {
                        setOpenSolution(false);
                        // Scroll to the solution section after navigation
                        setTimeout(() => {
                          const element = document.querySelector('[data-solution="commodity-risk-management"]');
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      }}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <TrendingDown className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Commodities Risk Management
                        </p>
                        <p className="text-gray-500 text-xs">
                          Navigate market volatility with confidence
                        </p>
                      </div>
                    </NavLink>

                    <NavLink
                      to="/solutions?solution=2"
                      onClick={() => {
                        setOpenSolution(false);
                        // Scroll to the solution section after navigation
                        setTimeout(() => {
                          const element = document.querySelector('[data-solution="supplier-segmentation-and-srm-support"]');
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      }}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <User2 className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Supplier Segmentation & SRM Support
                        </p>
                        <p className="text-gray-500 text-xs">
                          Build strategic supplier partnerships
                        </p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/solutions?solution=3"
                      onClick={() => {
                        setOpenSolution(false);
                        // Scroll to the solution section after navigation
                        setTimeout(() => {
                          const element = document.querySelector('[data-solution="tariff-impact-management"]');
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      }}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <FileBarChart className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Tariff Impact Management
                        </p>
                        <p className="text-gray-500 text-xs">
                          Simplify complex international trade regulations
                        </p>
                      </div>
                    </NavLink>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setOpenWhoWeHelp(true)}
                onMouseLeave={() => setOpenWhoWeHelp(false)}
              >
                {/* Who We Help Link */}
                <NavLink
                  to="/who-we-help"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : "cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
                  }
                >
                  Who We Help
                </NavLink>

                {/* Submenu */}
                {openWhoWeHelp && (
                  <div
                    className="absolute -mb-1 left-[-70px] bg-white shadow-xl rounded-xl py-4 w-64 z-50
             transition-all duration-300 ease-out opacity-100 scale-100"
                    style={{ transformOrigin: "top" }}
                  >
                    <NavLink
                      to="/who-we-help?section=procurement"
                      onClick={() => {
                        setOpenWhoWeHelp(false);
                        // Scroll to the section after navigation
                        setTimeout(() => {
                          const element = document.querySelector('[data-solution="procurement"]');
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      }}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <Target className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Procurement & Sourcing
                        </p>
                        <p className="text-gray-500 text-xs">
                          Strategic supplier lifecycle management
                        </p>
                      </div>
                    </NavLink>

                    <NavLink
                      to="/who-we-help?section=supplychain"
                      onClick={() => {
                        setOpenWhoWeHelp(false);
                        // Scroll to the section after navigation
                        setTimeout(() => {
                          const element = document.querySelector('[data-solution="supplychain"]');
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      }}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Supply Chain & Inventory
                        </p>
                        <p className="text-gray-500 text-xs">
                          Integrated supply chain management solutions
                        </p>
                      </div>
                    </NavLink>

                    <NavLink
                      to="/who-we-help?section=finance"
                      onClick={() => {
                        setOpenWhoWeHelp(false);
                        // Scroll to the section after navigation
                        setTimeout(() => {
                          const element = document.querySelector('[data-solution="finance"]');
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      }}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <Handshake className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Finance & Treasury
                        </p>
                        <p className="text-gray-500 text-xs">
                          Seamless connectivity for compliance and savings
                        </p>
                      </div>
                    </NavLink>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu(true)}
                onMouseLeave={() => setOpenMenu(false)}
              >
                {/* Company Link */}
                <NavLink
                  to="AboutUs"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : "cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
                  }
                >
                  Company
                </NavLink>

                {/* Submenu */}
                {openMenu && (
                  <div
                    className="absolute -mb-1 left-[-70px] bg-white shadow-xl rounded-xl py-4 w-64 z-50
             transition-all duration-300 ease-out opacity-100 scale-100"
                    style={{ transformOrigin: "top" }}
                  >
                    <HashLink
                      smooth
                      to="/AboutUs#about"
                      onClick={() => setOpenMenu(false)}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <User className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          About
                        </p>
                        <p className="text-gray-500 text-xs">
                          Learn more about our company and mission
                        </p>
                      </div>
                    </HashLink>

                    <HashLink
                      smooth
                      to="/AboutUs#leadership"
                      onClick={() => setOpenMenu(false)}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <Users className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Leadership
                        </p>
                        <p className="text-gray-500 text-xs">
                          Meet our executive team and key leaders
                        </p>
                      </div>
                    </HashLink>

                    <HashLink
                      smooth
                      to="/AboutUs#contact"
                      onClick={() => setOpenMenu(false)}
                      className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          Contact
                        </p>
                        <p className="text-gray-500 text-xs">
                          Get in touch with our team for support or inquiries
                        </p>
                      </div>
                    </HashLink>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HashLink smooth to="/AboutUs#contact" className="btn-primary">
                Request a demo
              </HashLink>
              {/* <NavLink
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
              </a> */}
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
      {isOpen && (
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
            {/* <NavLink
              to="/AboutUs"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Why Synavor
            </NavLink> */}
            <NavLink
              to="/AboutUs"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Company
            </NavLink>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              {/* <NavLink
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
              </a> */}
              <HashLink smooth to="/AboutUs#contact" className="w-full btn-primary mt-4">Request a demo</HashLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
