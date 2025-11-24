import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, ShoppingBag, UserCheck, Briefcase, Dumbbell, Ticket } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { name: 'Home', path: '/', icon: Users },
        { name: 'Nott-a-Shop', path: '/shop', icon: ShoppingBag },
        { name: 'Event Tickets', path: '/tickets', icon: Ticket },
        { name: 'Registration', path: '/registration', icon: UserCheck },
        { name: 'Jobs', path: '/jobs', icon: Briefcase },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
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
                        <div className="hidden sm:block">
                            <div className="text-lg font-bold text-gray-900">Students' Association</div>
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
                                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                                        ? 'text-white bg-purple-600'
                                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
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

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="py-4 space-y-2">
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
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;