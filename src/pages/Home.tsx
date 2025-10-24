import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, UserCheck, Briefcase, ArrowRight, Dumbbell, Ticket } from 'lucide-react';

const Home = () => {
    const features = [
        {
            title: 'Nott-a-Shop',
            description: 'Browse thrift items, club merchandise, and official University of Nottingham gear in our sustainable campus store.',
            icon: ShoppingBag,
            link: '/shop',
            color: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Event Registration',
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


    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Welcome to the{' '}
                            <span className="text-yellow-400">Students' Association</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                            Your one-stop destination for thrift shopping,event tickets, club registration, and student job opportunities at the University of Nottingham Malaysia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/shop"
                                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2"
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
            </section>


            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need in One Place
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From thrift shopping and equipment rental to event tickets, club registration, and job opportunities, we've got you covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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