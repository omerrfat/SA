import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, ShoppingBag, UserCheck, Briefcase, Dumbbell, Ticket, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { name: 'Home', path: '/', icon: Users },
        { name: 'Nott-a-Shop', path: '/shop', icon: ShoppingBag },
        { name: 'UNM Events', path: '/tickets', icon: Ticket },
        { name: 'Registration', path: '/registration', icon: UserCheck },
        { name: 'Jobs', path: '/jobs', icon: Briefcase },
    ];

    const aboutItems = [
        { name: 'SAExecs', path: '/student-executives' },
        { name: 'Student Council', path: '/student-council' },
        { name: 'SA Staff', path: '/sa-staff' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="bg-white shadow-md relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2">
                            <img
                                src="/SA logo_colour-01.png"
                                alt="Students' Association Logo"
                                className="h-10 w-auto"
                            />
                            <div>
                                <div className="text-sm sm:text-lg font-bold text-gray-900">Students' Association</div>
                                <div className="text-xs text-gray-600">University of Nottingham Malaysia</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${location.pathname === item.path
                                            ? 'text-white bg-purple-600'
                                            : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}

                            {/* About Us Dropdown */}
                            <div className="relative group">
                                <button
                                    className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                                    onMouseEnter={() => setIsAboutOpen(true)}
                                    onMouseLeave={() => setIsAboutOpen(false)}
                                >
                                    <span>About Us</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 transform origin-top ${isAboutOpen
                                        ? 'opacity-100 scale-y-100 visible'
                                        : 'opacity-0 scale-y-95 invisible'
                                        }`}
                                    onMouseEnter={() => setIsAboutOpen(true)}
                                    onMouseLeave={() => setIsAboutOpen(false)}
                                >
                                    {aboutItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                                                ? 'text-white bg-purple-600'
                                                : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Sidebar */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
                    onClick={closeMenu}
                />
            )}
            <div
                className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-4 space-y-4">
                    <button
                        onClick={closeMenu}
                        className="flex md:hidden p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200 mb-4"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <nav className="space-y-2">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={closeMenu}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                                        ? 'text-white bg-purple-600'
                                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}

                        {/* Mobile About Us Section */}
                        <div className="pt-2">
                            <button
                                onClick={() => setIsAboutOpen(!isAboutOpen)}
                                className="flex items-center space-x-3 w-full px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                            >
                                <span>About Us</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ml-auto ${isAboutOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Mobile Dropdown */}
                            {isAboutOpen && (
                                <div className="mt-2 ml-4 space-y-2">
                                    {aboutItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            onClick={closeMenu}
                                            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;