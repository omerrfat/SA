import React from 'react';
import { Users } from 'lucide-react';

const SAStaff = () => {
    const staffMembers = [
        {
            name: 'Divaghar Voothayakumar',
            position: 'SA Senior Officer',
            image: '/SA Staff/diva.jpeg',
            description: 'The SA Senior Officer provides strategic oversight and guidance to the SA team. They ensure smooth day-to-day operations, coordinate with university administration, and oversee major organizational initiatives. This role is essential in maintaining the association\'s governance standards and supporting all senior staff responsibilities.',
            color: 'from-blue-600 to-blue-800',
            bgLight: 'bg-blue-50',
            accentColor: 'text-blue-600',
            borderColor: 'border-blue-200',
        },
        {
            name: 'Gerard Aloysius Francis',
            position: 'SA Manager',
            image: '/SA Staff/gerard.jpeg',
            description: 'The SA Manager handles operational management and team coordination. They oversee project timelines, resource allocation, and ensure all departments work cohesively. The Manager bridges leadership vision with practical implementation and maintains accountability across all SA initiatives.',
            color: 'from-green-600 to-green-800',
            bgLight: 'bg-green-50',
            accentColor: 'text-green-600',
            borderColor: 'border-green-200',
        },
        {
            name: 'Nurul Farah Ain Nazwir',
            position: 'SA Administrative Officer',
            image: '/SA Staff/farah.jpeg',
            description: 'The SA Administrative Officer manages all administrative functions and documentation. They handle event logistics, financial records, scheduling, and communications coordination. This role ensures the organization runs efficiently and all processes are well-documented and accessible.',
            color: 'from-purple-600 to-purple-800',
            bgLight: 'bg-purple-50',
            accentColor: 'text-purple-600',
            borderColor: 'border-purple-200',
        },
        {
            name: 'Nurul Syammimi Mohd Nazri',
            position: 'SA Officer',
            image: '/SA Staff/syammimi.jpeg',
            description: 'The SA Officers provide support across various departments and initiatives. They assist in event planning, member engagement, project execution, and administrative support. Officers are the backbone of day-to-day operations and help bring SA initiatives to life.',
            color: 'from-orange-600 to-orange-800',
            bgLight: 'bg-orange-50',
            accentColor: 'text-orange-600',
            borderColor: 'border-orange-200',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-slate-700 to-slate-900 text-white py-12 md:py-36 overflow-hidden">
                {/* Placeholder for group image background */}
                <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{
                    backgroundImage: 'url("/SA Staff/collective.jpeg")'
                }}></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
                    <div className="flex items-center space-x-4 mb-4 animate-slide-in-left">
                        <Users className="w-8 h-8 md:w-10 md:h-10" />
                        <h1 className="text-3xl md:text-5xl font-bold">SA Staff</h1>
                    </div>
                    <p className="text-lg md:text-xl text-slate-100 max-w-3xl animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                        Meet the dedicated staff members who work behind the scenes to make the SA function smoothly and bring initiatives to life.
                    </p>
                </div>
            </section>

            {/* Staff Members Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-down">
                            Leadership Team
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-slide-up">
                            Meet the experienced professionals guiding the Students' Association.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {staffMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white animate-scale-in hover:scale-105`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Image */}
                                <div className="relative h-72 md:h-[420px] overflow-hidden bg-gray-200">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent`}></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white text-lg font-bold">{member.name}</p>
                                    </div>
                                </div>

                                {/* Header Bar */}
                                <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    {/* Position */}
                                    <div className="mb-6">
                                        <h3 className={`text-2xl md:text-3xl font-bold ${member.accentColor} mb-2`}>
                                            {member.position}
                                        </h3>
                                        <div className={`w-12 h-1 bg-gradient-to-r ${member.color} rounded-full`}></div>
                                    </div>

                                    {/* Description Section */}
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                            Role Description
                                        </p>
                                        <p className="text-gray-700 leading-relaxed text-justify">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About SA Staff Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 border-2 border-slate-200">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            About SA Staff
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            The SA Staff forms the operational backbone of the Students' Association, working tirelessly to support all student initiatives and ensure the smooth functioning of the organization.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            From strategic planning to day-to-day administration, our dedicated staff members are committed to creating an inclusive and vibrant campus community. They work collaboratively with student leadership to turn vision into action and ensure every SA initiative delivers maximum value to the student body.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SAStaff;
