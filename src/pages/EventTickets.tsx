import React, { useState } from 'react';
import { Ticket, Calendar, MapPin, Clock, Star, Search, Users } from 'lucide-react';

const EventTickets = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Events' },
        { id: 'social', name: 'Social Events' },
        { id: 'academic', name: 'Academic' },
        { id: 'cultural', name: 'Cultural' },
        { id: 'sports', name: 'Sports' },
        { id: 'entertainment', name: 'Entertainment' },
    ];

    const events = [
        {
            id: 1,
            name: 'CS Society Annual Ball',
            category: 'social',
            date: '2024-03-15',
            time: '7:00 PM',
            location: 'Grand Ballroom, Student Union',
            organizer: 'Computer Science Society',
            description: 'Join us for an elegant evening of dining, dancing, and networking with fellow CS students.',
            image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.9,
            capacity: 200,
            sold: 150,
            available: true,
        },
        {
            id: 2,
            name: 'Tech Talk: AI in Healthcare',
            category: 'academic',
            date: '2024-02-28',
            time: '2:00 PM',
            location: 'Lecture Theatre A',
            organizer: 'Engineering Society',
            description: 'Explore the latest developments in artificial intelligence applications in healthcare.',
            image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.8,
            capacity: 100,
            sold: 75,
            available: true,
        },
        {
            id: 3,
            name: 'International Food Festival',
            category: 'cultural',
            date: '2026-03-08',
            time: '11:00 AM',
            location: 'Campus Quad',
            organizer: 'International Students Society',
            description: 'Taste authentic cuisines from around the world prepared by international students.',
            image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.7,
            capacity: 300,
            sold: 180,
            available: true,
        },
        {
            id: 4,
            name: 'Inter-College Football Championship',
            category: 'sports',
            date: '2026-03-20',
            time: '3:00 PM',
            location: 'Sports Complex Field',
            organizer: 'Sports Committee',
            description: 'Cheer for your college in the ultimate football showdown.',
            image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.6,
            capacity: 500,
            sold: 320,
            available: true,
        },
        {
            id: 5,
            name: 'Comedy Night',
            category: 'entertainment',
            date: '2026-03-12',
            time: '8:00 PM',
            location: 'Student Union Main Hall',
            organizer: 'Entertainment Committee',
            description: 'Laugh the night away with professional comedians and student performers.',
            image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.5,
            capacity: 250,
            sold: 200,
            available: true,
        },
        {
            id: 6,
            name: 'Photography Exhibition Opening',
            category: 'cultural',
            date: '2026-02-25',
            time: '6:00 PM',
            location: 'Art Gallery, Student Union',
            organizer: 'Photography Club',
            description: 'Discover stunning photography works by talented student photographers.',
            image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.8,
            capacity: 80,
            sold: 45,
            available: true,
        },
    ];

    const filteredEvents = events.filter(event => {
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Upcoming Student Association <span className="text-purple-600">Events</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Register for exciting events organized by clubs and societies across campus
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-3 rounded-xl whitespace-nowrap font-medium transition-colors duration-200 ${selectedCategory === category.id
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="space-y-6 mb-16">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row">
                                <img
                                    src={event.image}
                                    alt={event.name}
                                    className="w-full lg:w-80 h-64 lg:h-auto object-cover"
                                />

                                <div className="flex-1 p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.name}</h3>
                                            <div className="flex items-center text-gray-600 mb-2">
                                                <Users className="w-4 h-4 mr-2" />
                                                <span className="text-sm">Organized by {event.organizer}</span>
                                                <div className="flex items-center ml-4">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                    <span className="text-sm">{event.rating}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-purple-600 mb-1">
                                                {event.price}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {event.sold}/{event.capacity} registered
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4">{event.description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                                            <div>
                                                <div className="font-medium">{formatDate(event.date)}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Clock className="w-4 h-4 mr-2 text-blue-600" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 mr-2 text-red-600" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    {/* Removed tickets-left counter, kept bar only */}
                                    <div className="mb-4">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-purple-600 h-2 rounded-full"
                                                style={{ width: `${(event.sold / event.capacity) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            disabled={!event.available || event.sold >= event.capacity}
                                            className={`flex-1 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${event.available && event.sold < event.capacity
                                                ? 'bg-purple-600 text-white hover:bg-purple-700'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                        >
                                            <Ticket className="w-4 h-4" />
                                            <span>
                                                {event.sold >= event.capacity ? 'Closed' : 'Register Here'}
                                            </span>
                                        </button>
                                        <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200">
                                            More Info
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-12">
                        <Ticket className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mb-8 text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Want to Organize Your Own Event?
                    </h2>
                    <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                        Contact the Students' Association to get help organizing and promoting your club or society events.
                    </p>
                    <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200">
                        Get Event Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventTickets;
