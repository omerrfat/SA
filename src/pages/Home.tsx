import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, UserCheck, Briefcase, ArrowRight, ChevronLeft, ChevronRight, Ticket } from 'lucide-react';

const Home = () => {
    const [currentExecIndex, setCurrentExecIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);

    const campusImages = [
        '/campus.jpg',
        '/campus3.jpg',
        '/campus2.jpg',
    ];

    const executives = [
        {
            name: 'Jorden Yap',
            position: 'SA President',
            email: 'sapresident@nottingham.edu.my',
            image: '/Jorden.JPG',
            description: 'The SA President leads the association, represents student interests, and oversees major initiatives. In addition, the President manages event finances and drives sponsorship efforts to support sustainable funding.',

        },
        {
            name: 'Chan Zhi Chen',
            position: 'Vice President',
            email: 'kasavp@nottingham.edu.my',
            image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Supporting the President and overseeing club operations. Committed to fostering collaboration and student engagement across campus.',

        },
        {
            name: 'Nurul Aisyah Syakinah binti Rodzay',
            position: 'SA Secretary',
            email: 'sasecretary@nottingham.edu.my',
            image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Managing communications and documentation. Ensuring smooth operations and keeping everyone informed and connected.',

        },
        {
            name: 'Manahil Asad',
            position: 'Sports Officer',
            email: 'sasports@nottingham.edu.my',
            image: '/sports-officer.jpeg',
            description: 'The  Sports Officer oversees the wellbeing and smooth functioning of all sports clubs and athletes, plan and manage major sports events like Nations Cup, coordinate logistics and ensure safety and compliance. Sports Officer also liaise closely with the sports complex, and external sporting bodies to support the athletes and teams.',

        },
        {
            name: 'Sakeena Endah Muzli',
            position: 'Sustainability Officer',
            email: 'sasustainability@nottingham.edu.my',
            image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Leading sustainability initiatives and environmental advocacy. Creating a greener campus for future generations.',

        },
        {
            name: 'Farzana Binti Suhaimi',
            position: 'Home Students\' Officer',
            email: 'sahome@nottingham.edu.my',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.',

        },
        {
            name: 'Myra Mazhar Ud Deen',
            position: 'International Students\' Officer',
            email: 'sainternational@nottingham.edu.my',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.',

        },
        {
            name: 'Marissa Alysha Iman',
            position: 'Activities Officer',
            email: 'saactivities@nottingham.edu.my',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.',

        },
        {
            name: 'Leo Raymond',
            position: 'Education Officer',
            email: 'saeducation@nottingham.edu.my',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.',

        },
        {
            name: 'Samuel Ogbonna Akuma',
            position: 'PostGraduate Officer',
            email: 'pg@sa.unm.edu.my',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.',

        },
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

    // Auto-slide functionality
    useEffect(() => {
        if (!autoSlide) return;
        const timer = setInterval(() => {
            setCurrentExecIndex((prev) => (prev + 1) % executives.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, [autoSlide, executives.length]);

    // Auto-slide functionality for background images
    useEffect(() => {
        const bgTimer = setInterval(() => {
            setCurrentBgImageIndex((prev) => (prev + 1) % campusImages.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(bgTimer);
    }, [campusImages.length]);

    const nextExec = () => {
        setAutoSlide(false);
        setCurrentExecIndex((prev) => (prev + 1) % executives.length);
        setTimeout(() => setAutoSlide(true), 5000);
    };

    const prevExec = () => {
        setAutoSlide(false);
        setCurrentExecIndex((prev) => (prev - 1 + executives.length) % executives.length);
        setTimeout(() => setAutoSlide(true), 5000);
    };

    const goToExec = (index: React.SetStateAction<number>) => {
        setAutoSlide(false);
        setCurrentExecIndex(index);
        setTimeout(() => setAutoSlide(true), 5000);
    };

    const currentExec = executives[currentExecIndex];

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
                        <div className="text-white">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Welcome to the{' '}
                                <span className="text-yellow-400 block">Students' Association</span>
                            </h1>
                            <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-2xl leading-relaxed">
                                Your one-stop destination for thrift shopping, event tickets, club registration, and student job opportunities at the University of Nottingham Malaysia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/shop"
                                    className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    <span>Explore Shop</span>
                                </Link>
                                <Link
                                    to="/registration"
                                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-200 flex items-center justify-center space-x-2"
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

            {/* Student Execs Carousel Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Your <span className="text-purple-600">Student Executive Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Dedicated student leaders working to make your university experience unforgettable.
                        </p>
                    </div>

                    {/* Main Carousel */}
                    <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <img
                                src={currentExec.image}
                                alt={currentExec.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                            <div className="text-white">
                                <h3 className="text-4xl md:text-5xl font-bold mb-2">{currentExec.name}</h3>
                                <p className="text-2xl md:text-3xl text-gray-100 mb-4">{currentExec.position}</p>
                                <p className="text-base md:text-lg text-gray-100 max-w-2xl mb-6 leading-relaxed">
                                    {currentExec.description}
                                </p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm md:text-base">📧</span>
                                    <a href={`mailto:${currentExec.email}`} className="text-gray-100 hover:text-white underline">
                                        {currentExec.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevExec}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-200 z-10"
                            aria-label="Previous executive"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextExec}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-200 z-10"
                            aria-label="Next executive"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {executives.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToExec(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${index === currentExecIndex
                                    ? 'bg-purple-600 w-8'
                                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to executive ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Thumbnails Grid */}
                    <div className="flex justify-center mt-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-4xl">
                            {executives.map((exec, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToExec(index)}
                                    className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${index === currentExecIndex ? 'ring-4 ring-purple-600 scale-105' : 'opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={exec.image}
                                        alt={exec.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <div className="absolute inset-0 flex items-end justify-center pb-2">
                                        <p className="text-white text-xs font-semibold text-center line-clamp-1">{exec.name}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-600 mb-6 text-lg">
                            Have questions or suggestions? Our executive team is here to help!
                        </p>
                        <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need in One Place
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From thrift shopping and event tickets to club registration and job opportunities, we've got you covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
            <section className="bg-yellow-400 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-purple-800 mb-8 max-w-2xl mx-auto">
                        Join thousands of students who are already making the most of their university experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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