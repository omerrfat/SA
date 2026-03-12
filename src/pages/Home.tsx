import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, UserCheck, Briefcase, ArrowRight, Ticket } from 'lucide-react';
import GradientText from '../components/GradientText';
import { useInView } from '../hooks/useInView';

const Home = () => {
    const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);
    const { ref: featuresRef, isInView: featuresInView } = useInView({ threshold: 0.1 });
    const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.2 });

    const campusImages = [
        '/campus.jpg',
        '/campus3.jpg',
        '/campus2.jpg',
    ];

    const features = [
        {
            title: 'Nott-a-Shop',
            description: 'Browse thrift items, club merchandise, and official University of Nottingham gear in our sustainable campus store.',
            icon: ShoppingBag,
            link: '/shop',
            color: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Event Tickets',
            description: 'Register for exciting events organized by clubs and societies across campus.',
            icon: Ticket,
            link: '/tickets',
            color: 'from-blue-500 to-blue-600',
        },
        {
            title: 'Club Registration',
            description: 'Join clubs and societies, discover new communities, and register for activities that match your interests.',
            icon: UserCheck,
            link: '/registration',
            color: 'from-yellow-400 to-yellow-500',
        },
        {
            title: 'Student Jobs',
            description: 'Find part-time job opportunities, work-study positions, and earn money while studying at university.',
            icon: Briefcase,
            link: '/jobs',
            color: 'from-purple-600 to-indigo-600',
        },
    ];

    // Auto-slide functionality for background images
    useEffect(() => {
        const bgTimer = setInterval(() => {
            setCurrentBgImageIndex((prev) => (prev + 1) % campusImages.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(bgTimer);
    }, [campusImages.length]);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Images Carousel */}
                <div className="absolute inset-0 z-0">
                    <div className="relative w-full h-full">
                        {/* Display 3 images side by side */}
                        <div className="flex h-full transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(-${currentBgImageIndex * 100}%)`
                            }}>
                            {campusImages.map((image, index) => (
                                <div key={index} className="w-full h-full flex-shrink-0">
                                    <img
                                        src={image}
                                        alt={`Campus ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-purple-800/50 to-indigo-900/70"></div>
                </div>

                {/* Content Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Text Content - Left Side */}
                        <div className="text-white animate-fade-in">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-down">
                                Welcome to the{' '}
                                <GradientText colors={['#FFD700', '#FFA500', '#FF69B4']} animationSpeed={8} direction="horizontal">
                                    <span className="block">Students' Association</span>
                                </GradientText>
                            </h1>
                            <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                Your one-stop destination for thrift shopping, event tickets, club registration, and student job opportunities at the University of Nottingham Malaysia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                                <Link
                                    to="/shop"
                                    className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    <span>Explore Shop</span>
                                </Link>
                                <Link
                                    to="/registration"
                                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <UserCheck className="w-5 h-5" />
                                    <span>Join Clubs</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {campusImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBgImageIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentBgImageIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 w-2 hover:bg-white/70'
                                }`}
                            aria-label={`Go to campus image ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50" ref={featuresRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-slide-down ${featuresInView ? 'in-view' : ''}`}>
                            Everything You Need in One Place
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-3xl mx-auto scroll-slide-up ${featuresInView ? 'in-view' : ''}`}>
                            From thrift shopping and event tickets to club registration and job opportunities, we've got you covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group scroll-scale-in hover:scale-105 ${featuresInView ? 'in-view' : ''}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                                    <div className="p-8">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} text-white rounded-xl mb-6`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                                        <Link
                                            to={feature.link}
                                            className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 group-hover:translate-x-1 transition-all duration-200"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-yellow-400 py-16" ref={ctaRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className={`text-3xl md:text-4xl font-bold text-purple-900 mb-4 scroll-slide-down ${ctaInView ? 'in-view' : ''}`}>
                        Ready to Get Started?
                    </h2>
                    <p className={`text-xl text-purple-800 mb-8 max-w-2xl mx-auto scroll-slide-up ${ctaInView ? 'in-view' : ''}`}>
                        Join thousands of students who are already making the most of their university experience.
                    </p>
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center scroll-slide-up ${ctaInView ? 'in-view' : ''}`}>
                        <Link
                            to="/registration"
                            className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
                        >
                            Register for Clubs
                        </Link>
                        <Link
                            to="/jobs"
                            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200"
                        >
                            Find Jobs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
