import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const StudentExecutives = () => {
    const [currentExecIndex, setCurrentExecIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const executives = [
        {
            name: 'Jorden Yap',
            position: 'SA President',
            email: 'sapresident@nottingham.edu.my',
            image: '/Jorden.JPG',
            description: 'The SA President leads the association, represents student interests, and oversees major initiatives. In addition, the President manages event finances and drives sponsorship efforts to support sustainable funding.',
            color: 'from-purple-600 to-purple-800',
        },
        {
            name: 'Chan Zhi Chen',
            position: 'Vice President',
            email: 'kasavp@nottingham.edu.my',
            image: '/Zhi Chen.jpg',
            description: 'Supporting the President and overseeing club operations. Committed to fostering collaboration and student engagement across campus.',
            color: 'from-blue-600 to-blue-800',
        },
        {
            name: 'Nurul Aisyah Syakinah binti Rodzay',
            position: 'SA Secretary',
            email: 'sasecretary@nottingham.edu.my',
            image: '/Aisyah.jpeg',
            description: 'Managing communications and documentation. Ensuring smooth operations and keeping everyone informed and connected.',
            color: 'from-pink-600 to-pink-800',
        },
        {
            name: 'Manahil Asad',
            position: 'Sports Officer',
            email: 'sasports@nottingham.edu.my',
            image: '/sports-officer.jpeg',
            description: 'The Sports Officer oversees the wellbeing and smooth functioning of all sports clubs and athletes, plan and manage major sports events like Nations Cup, coordinate logistics and ensure safety and compliance.',
            color: 'from-red-600 to-red-800',
        },
        {
            name: 'Sakeena Endah Muzli',
            position: 'Sustainability Officer',
            email: 'sasustainability@nottingham.edu.my',
            image: '/Kiki.jpeg',
            description: 'Leading sustainability initiatives and environmental advocacy. Creating a greener campus for future generations.',
            color: 'from-green-600 to-green-800',
        },
        {
            name: 'Farzana Binti Suhaimi',
            position: 'Home Students\' Officer',
            email: 'sahome@nottingham.edu.my',
            image: '/Zee.jpeg',
            description: 'Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.',
            color: 'from-yellow-600 to-yellow-800',
        },
        {
            name: 'Myra Mazhar Ud Deen',
            position: 'International Students\' Officer',
            email: 'sainternational@nottingham.edu.my',
            image: '/Myra Mazhar Ud Deen.PNG',
            description: 'Supporting international students and ensuring they feel welcomed and integrated into campus life. Organizing cultural events and providing support services.',
            color: 'from-indigo-600 to-indigo-800',
        },
        {
            name: 'Marissa Alysha Iman',
            position: 'Activities Officer',
            email: 'saactivities@nottingham.edu.my',
            image: '/Marsi.jpeg',
            description: 'Planning and organizing student activities and events. Creating memorable experiences that bring the campus community together.',
            color: 'from-orange-600 to-orange-800',
        },
        {
            name: 'Leo Raymond',
            position: 'Education Officer',
            email: 'saeducation@nottingham.edu.my',
            image: '/Leo.JPG',
            description: 'Advocating for academic excellence and student learning. Supporting initiatives that enhance the educational experience.',
            color: 'from-cyan-600 to-cyan-800',
        },
        {
            name: 'Samuel Ogbonna Akuma',
            position: 'PostGraduate Officer',
            email: 'pg@sa.unm.edu.my',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Representing postgraduate student interests and addressing unique challenges. Supporting research and academic development.',
            color: 'from-rose-600 to-rose-800',
        },
    ];

    // Auto-slide functionality
    useEffect(() => {
        if (!autoSlide) return;
        const timer = setInterval(() => {
            setCurrentExecIndex((prev) => (prev + 1) % executives.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [autoSlide, executives.length]);

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

    const goToExec = (index: number) => {
        setAutoSlide(false);
        setCurrentExecIndex(index);
        setTimeout(() => setAutoSlide(true), 5000);
    };

    const currentExec = executives[currentExecIndex];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Your 2025-26 Student Association Executives
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                            Meet the dedicated student leaders working to enhance your university experience and represent your voices across campus.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Carousel Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet the Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Click through to learn more about each executive and their roles.
                        </p>
                    </div>

                    {/* Main Carousel */}
                    <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <img
                                src={currentExec.image}
                                alt={currentExec.name}
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    objectPosition: currentExec.name === 'Myra Mazhar Ud Deen' ? 'center 30%' : 'center'
                                }}
                            />
                        </div>
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="text-white">
                                <h3 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{currentExec.name}</h3>
                                <p className="text-2xl md:text-3xl text-gray-100 mb-4 drop-shadow-lg">{currentExec.position}</p>
                                <p className="text-base md:text-lg text-gray-100 max-w-2xl mb-6 leading-relaxed drop-shadow-md">
                                    {currentExec.description}
                                </p>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-5 h-5 drop-shadow-md" />
                                    <a href={`mailto:${currentExec.email}`} className="text-gray-100 hover:text-white underline drop-shadow-md">
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
                </div>
            </section>

            {/* Full Grid Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The Full Executive Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Representing every aspect of student life at the University of Nottingham Malaysia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {executives.map((exec, index) => (
                            <div
                                key={index}
                                onClick={() => goToExec(index)}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden bg-gray-200">
                                    <img
                                        src={exec.image}
                                        alt={exec.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${exec.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{exec.name}</h3>
                                    <p className="text-sm font-semibold text-purple-600 mb-3">{exec.position}</p>
                                    <a
                                        href={`mailto:${exec.email}`}
                                        className="flex items-center space-x-2 text-xs text-gray-600 hover:text-purple-600 transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span className="truncate">{exec.email}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                About the Student Association
                            </h2>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                The Students' Association is the representative body for all students at the University of Nottingham Malaysia Campus. Our mission is to enhance student life, represent your interests, and create a vibrant campus community.
                            </p>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                With 10 dedicated executives, we oversee everything from sports and sustainability to academic support and international student welfare. We're here to listen, advocate, and create opportunities for every student.
                            </p>
                            <div className="flex items-center space-x-4 mt-8">
                                <MapPin className="w-6 h-6 text-purple-600" />
                                <div>
                                    <p className="font-semibold text-gray-900">Location</p>
                                    <p className="text-gray-600">University of Nottingham Malaysia, Semenyih</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Get Involved</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <span className="text-yellow-400 text-2xl">✓</span>
                                    <span>Join clubs and societies that match your interests</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-yellow-400 text-2xl">✓</span>
                                    <span>Attend exciting events throughout the year</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-yellow-400 text-2xl">✓</span>
                                    <span>Volunteer and make a difference on campus</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-yellow-400 text-2xl">✓</span>
                                    <span>Voice your concerns and suggestions to leadership</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-yellow-400 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                        Have Questions?
                    </h2>
                    <p className="text-xl text-purple-800 mb-8 max-w-2xl mx-auto">
                        Reach out to any member of the executive team. We're here to help!
                    </p>
                    <a
                        href="mailto:sapresident@nottingham.edu.my"
                        className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
                    >
                        Contact the President
                    </a>
                </div>
            </section>
        </div>
    );
};

export default StudentExecutives;