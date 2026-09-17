import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, ShoppingBag, UserCheck, Briefcase, Ticket, ChevronDown } from 'lucide-react';
import { gsap, useGSAP, ScrollTrigger } from '../lib/gsap';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const transparent = isHome && !scrolled;

    const headerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

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

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    // Track scroll past the hero to swap from a transparent overlay header to a solid one.
    useGSAP(
        () => {
            if (!isHome) {
                setScrolled(true);
                return;
            }
            setScrolled(window.scrollY > 40);
            const trigger = ScrollTrigger.create({
                start: 0,
                end: 80,
                onLeave: () => setScrolled(true),
                onEnterBack: () => setScrolled(false),
            });
            return () => trigger.kill();
        },
        { dependencies: [isHome] }
    );

    // About Us dropdown open/close.
    useGSAP(
        () => {
            if (!dropdownRef.current) return;
            const items = dropdownRef.current.querySelectorAll('a');
            if (isAboutOpen) {
                gsap.fromTo(
                    dropdownRef.current,
                    { autoAlpha: 0, y: -8, scale: 0.98 },
                    { autoAlpha: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out', overwrite: true }
                );
                gsap.fromTo(
                    items,
                    { autoAlpha: 0, y: -4 },
                    { autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.04, delay: 0.05, ease: 'power2.out', overwrite: true }
                );
            } else {
                gsap.to(dropdownRef.current, { autoAlpha: 0, y: -8, scale: 0.98, duration: 0.15, ease: 'power2.in', overwrite: true });
            }
        },
        { dependencies: [isAboutOpen], scope: headerRef }
    );

    // Mobile drawer + backdrop.
    useGSAP(
        () => {
            if (!drawerRef.current) return;
            const width = drawerRef.current.offsetWidth;
            gsap.to(drawerRef.current, { x: isMenuOpen ? 0 : width, duration: 0.45, ease: 'power3.inOut', overwrite: true });
            if (overlayRef.current) {
                gsap.to(overlayRef.current, { autoAlpha: isMenuOpen ? 1 : 0, duration: 0.3, ease: 'power2.out', overwrite: true });
            }
        },
        { dependencies: [isMenuOpen], scope: headerRef }
    );

    const linkText = transparent ? 'text-white' : 'text-gray-700';
    const linkHover = transparent ? 'hover:text-white hover:bg-white/10' : 'hover:text-purple-600 hover:bg-purple-50';

    return (
        <>
            <div
                ref={headerRef}
                className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${transparent ? 'bg-transparent' : 'border-b border-purple-900/5 bg-white/90 shadow-sm backdrop-blur-md'
                    }`}
            >
                {transparent && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                )}
                <header className="relative">
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
                                    <div className={`text-sm sm:text-lg font-bold transition-colors duration-300 ${transparent ? 'text-white' : 'text-gray-900'}`}>
                                        Students' Association
                                    </div>
                                    <div className={`text-xs transition-colors duration-300 ${transparent ? 'text-white/75' : 'text-gray-600'}`}>
                                        University of Nottingham Malaysia
                                    </div>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center space-x-8">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                                ? 'text-white bg-purple-600'
                                                : `${linkText} ${linkHover}`
                                                }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span>{item.name}</span>
                                        </Link>
                                    );
                                })}

                                {/* About Us Dropdown */}
                                <div className="relative">
                                    <button
                                        className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${linkText} ${linkHover}`}
                                        onMouseEnter={() => setIsAboutOpen(true)}
                                        onMouseLeave={() => setIsAboutOpen(false)}
                                    >
                                        <span>About Us</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>

                                    <div
                                        ref={dropdownRef}
                                        className="absolute left-0 top-full w-48 overflow-hidden rounded-2xl bg-white opacity-0 shadow-xl origin-top"
                                        style={{ visibility: 'hidden' }}
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
                                className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${linkText} ${linkHover}`}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            {/* Mobile Navigation Overlay + Drawer */}
            <div
                ref={overlayRef}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/50 md:hidden z-40 opacity-0"
                style={{ visibility: 'hidden' }}
            />
            <div
                ref={drawerRef}
                className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-40 md:hidden overflow-y-auto"
                style={{ transform: 'translateX(100%)' }}
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
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
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
                                className="flex items-center space-x-3 w-full px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-xl hover:bg-purple-50 transition-colors duration-200"
                            >
                                <span>About Us</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ml-auto ${isAboutOpen ? 'rotate-180' : ''}`} />
                            </button>

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
