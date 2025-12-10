import React, { useState } from 'react';
import { Users, Calendar, MapPin, Star, Search, Filter, ArrowRight } from 'lucide-react';

const Registration = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Categories' },
        { id: 'academic', name: 'Academic' },
        { id: 'sports', name: 'Sports' },
        { id: 'cultural', name: 'Cultural' },
        { id: 'technology', name: 'Technology' },
        { id: 'volunteer', name: 'Volunteer' },
    ];

    const clubs = [
        {
            id: 1,
            name: 'Computer Science Society',
            category: 'technology',
            members: 450,
            description: 'Connect with fellow CS students, attend tech talks, and participate in coding competitions.',
            meetingTime: 'Wednesdays 6PM',
            location: 'Computer Science Building',
            image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.8,
            tags: ['Programming', 'Networking', 'Career Development'],
        },
        {
            id: 2,
            name: 'Football Club',
            category: 'sports',
            members: 180,
            description: 'Train with our teams, compete in university leagues, and enjoy the beautiful game.',
            meetingTime: 'Tuesdays & Thursdays 4PM',
            location: 'Sports Complex',
            image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.6,
            tags: ['Team Sports', 'Fitness', 'Competition'],
        },
        {
            id: 3,
            name: 'International Students Society',
            category: 'cultural',
            members: 320,
            description: 'Celebrate diversity, share cultures, and build global friendships.',
            meetingTime: 'Fridays 7PM',
            location: 'Student Union',
            image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.9,
            tags: ['Cultural Exchange', 'Social', 'Community'],
        },
        {
            id: 4,
            name: 'Debating Society',
            category: 'academic',
            members: 95,
            description: 'Develop your public speaking skills and engage in thought-provoking discussions.',
            meetingTime: 'Mondays 6:30PM',
            location: 'Arts Building',
            image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.7,
            tags: ['Public Speaking', 'Critical Thinking', 'Competition'],
        },
        {
            id: 5,
            name: 'Environmental Action Group',
            category: 'volunteer',
            members: 240,
            description: 'Make a positive impact on campus sustainability and environmental awareness.',
            meetingTime: 'Saturdays 10AM',
            location: 'Student Union',
            image: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.5,
            tags: ['Sustainability', 'Community Service', 'Environment'],
        },
        {
            id: 6,
            name: 'Photography Club',
            category: 'cultural',
            members: 150,
            description: 'Capture moments, learn new techniques, and showcase your creative vision.',
            meetingTime: 'Sundays 2PM',
            location: 'Media Centre',
            image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.8,
            tags: ['Creative', 'Art', 'Photography'],
        },
    ];

    const filteredClubs = clubs.filter(club => {
        const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
        const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            club.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Club & Society <span className="text-purple-600">Registration</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover amazing communities, make lifelong friends, and pursue your passions
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
                                placeholder="Search clubs and societies..."
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

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl font-bold text-purple-600 mb-2">80+</div>
                        <div className="text-gray-600">Active Clubs</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">2,500+</div>
                        <div className="text-gray-600">Members</div>
                    </div>
                </div>

                {/* Clubs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {filteredClubs.map((club) => (
                        <div
                            key={club.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="flex">
                                <img
                                    src={club.image}
                                    alt={club.name}
                                    className="w-32 h-32 object-cover"
                                />
                                <div className="flex-1 p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-bold text-xl text-gray-900">{club.name}</h3>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm text-gray-600">{club.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-2">{club.description}</p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Users className="w-4 h-4 mr-2" />
                                            {club.members} members
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {club.meetingTime}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {club.location}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {club.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                                        <span>Join Club</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredClubs.length === 0 && (
                    <div className="text-center py-12">
                        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No clubs found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-yellow-400 rounded-2xl p-8 mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
                        Can't find what you're looking for?
                    </h2>
                    <p className="text-purple-800 mb-6 max-w-2xl mx-auto">
                        Start your own club or society! We'll help you get organized and connect with like-minded students.
                    </p>
                    <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200">
                        Start a New Club
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;