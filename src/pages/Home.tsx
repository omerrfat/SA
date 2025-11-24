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

            {/* Student Execs Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Your <span className="text-purple-600">Student Executive Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Dedicated student leaders working to make your university experience unforgettable
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* President */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="President"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Jorden Yap</h3>
                                    <p className="text-purple-200 text-sm">SA President</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Leading the Students' Association with vision and dedication. Focused on enhancing student life and representing your voices.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 president@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>

                        {/* Vice President */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Vice President"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Zhi Chen</h3>
                                    <p className="text-purple-200 text-sm">Vice President</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Supporting the President and overseeing club operations. Committed to fostering collaboration and student engagement across campus.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 vp@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>

                        {/* Secretary */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Secretary"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Aisyah</h3>
                                    <p className="text-purple-200 text-sm">SA Secretary</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Managing communications and documentation. Ensuring smooth operations and keeping everyone informed and connected.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 secretary@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>

                        {/* Sports Officer */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="/sports-officer.jpeg"
                                    alt="Treasurer"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Manahil Asad</h3>
                                    <p className="text-purple-200 text-sm">Sports Officer</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    The  Sports Officer oversees the wellbeing and smooth functioning of all sports clubs and athletes, plan and manage major
                                    sports events like Nations Cup, coordinate logistics and ensure safety and compliance.
                                    Sports Officer also liaise closely with the sports complex, and external sporting bodies to support the athletes and teams.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 sasports@nottingham.edu.my</span>
                                </div>
                            </div>
                        </div>

                        {/* Events Director */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Events Director"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Sakeena</h3>
                                    <p className="text-purple-200 text-sm">Sustainability Officer</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Planning and executing amazing campus events. Creating memorable experiences that bring the student community together.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 events@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>

                        {/* Welfare Officer */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Welfare Officer"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Farzana</h3>
                                    <p className="text-purple-200 text-sm">Welfare Officer</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 welfare@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>
                        {/* Education Officer */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Welfare Officer"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Leo</h3>
                                    <p className="text-purple-200 text-sm">Education Officer</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 education@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>
                        {/* Activities Officer */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Welfare Officer"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Marsi</h3>
                                    <p className="text-purple-200 text-sm">Activities Officer</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 activies@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>
                        {/* International Student Officer */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Welfare Officer"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Myra</h3>
                                    <p className="text-purple-200 text-sm">International Student Officer</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 iso@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>
                        {/* PG Officer */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    alt="Welfare Officer"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-xl">Samuel</h3>
                                    <p className="text-purple-200 text-sm">PG Officer</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Advocating for student wellbeing and support services. Your go-to person for welfare concerns and mental health initiatives.
                                </p>
                                <div className="flex items-center text-purple-600 font-medium">
                                    <span className="text-sm">📧 pg@sa.unm.edu.my</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">
                            Have questions or suggestions? Our executive team is here to help!
                        </p>
                        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200">
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