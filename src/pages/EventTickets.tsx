import React, { useState } from 'react';
import { Ticket, Calendar, MapPin, Clock, Star, Search, Users, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const EventTickets = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);

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
            capacity: 200,
            sold: 150,
            available: true,
            price: 'RM 25',
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
            capacity: 100,
            sold: 75,
            available: true,
            price: 'Free',
        },
        {
            id: 3,
            name: 'International Food Festival',
            category: 'cultural',
            date: '2024-03-08',
            time: '11:00 AM',
            location: 'Campus Quad',
            organizer: 'International Students Society',
            description: 'Taste authentic cuisines from around the world prepared by international students.',
            image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400',
            capacity: 300,
            sold: 180,
            available: true,
            price: 'RM 15',
        },
        {
            id: 4,
            name: 'Inter-College Football Championship',
            category: 'sports',
            date: '2024-03-20',
            time: '3:00 PM',
            location: 'Sports Complex Field',
            organizer: 'Sports Committee',
            description: 'Cheer for your college in the ultimate football showdown.',
            image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
            capacity: 500,
            sold: 320,
            available: true,
            price: 'RM 10',
        },
        {
            id: 5,
            name: 'Comedy Night',
            category: 'entertainment',
            date: '2024-03-12',
            time: '8:00 PM',
            location: 'Student Union Main Hall',
            organizer: 'Entertainment Committee',
            description: 'Laugh the night away with professional comedians and student performers.',
            image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400',
            capacity: 250,
            sold: 200,
            available: true,
            price: 'RM 20',
        },
        {
            id: 6,
            name: 'Photography Exhibition Opening',
            category: 'cultural',
            date: '2024-02-25',
            time: '6:00 PM',
            location: 'Art Gallery, Student Union',
            organizer: 'Photography Club',
            description: 'Discover stunning photography works by talented student photographers.',
            image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=400',
            capacity: 80,
            sold: 45,
            available: true,
            price: 'Free',
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

    // Calendar logic
    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const getEventsForDate = (day) => {
        const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.filter(event => event.date === dateStr);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setIsEventModalOpen(true);
    };

    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        calendarDays.push(i);
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-8">
            {/* Calendar Hamburger Menu */}
            <div className="fixed left-0 top-16 z-40">
                <button
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    className="bg-purple-600 text-white p-4 rounded-r-lg hover:bg-purple-700 transition-colors shadow-lg"
                    aria-label="Toggle calendar"
                >
                    {isCalendarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Calendar Sidebar */}
            <div
                className={`fixed left-0 top-0 z-30 w-80 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out pt-20 overflow-y-auto ${isCalendarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Calendar</h2>

                    {/* Month Navigation */}
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={handlePrevMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {currentMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                        </h3>
                        <button
                            onClick={handleNextMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="space-y-2">
                        {/* Weekday Headers */}
                        <div className="grid grid-cols-7 gap-2 mb-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className="text-center text-xs font-bold text-gray-600">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Days */}
                        <div className="grid grid-cols-7 gap-2">
                            {calendarDays.map((day, index) => {
                                const dayEvents = day ? getEventsForDate(day) : [];
                                return (
                                    <div
                                        key={index}
                                        className={`p-2 rounded-lg text-center text-sm font-medium transition-all ${day
                                            ? dayEvents.length > 0
                                                ? 'bg-purple-100 border-2 border-purple-600 text-purple-900 cursor-pointer hover:bg-purple-200'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            : ''
                                            }`}
                                    >
                                        {day && (
                                            <div>
                                                <div>{day}</div>
                                                {dayEvents.length > 0 && (
                                                    <div className="text-xs text-purple-600 font-bold mt-1">
                                                        {dayEvents.length}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Events List for Current Month */}
                    <div className="mt-8 border-t pt-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Events This Month</h3>
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {events
                                .filter(event => new Date(event.date).getMonth() === currentMonth.getMonth())
                                .sort((a, b) => new Date(a.date) - new Date(b.date))
                                .map(event => (
                                    <button
                                        key={event.id}
                                        onClick={() => {
                                            handleEventClick(event);
                                            setIsCalendarOpen(false);
                                        }}
                                        className="w-full text-left p-3 bg-gray-50 hover:bg-purple-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-all"
                                    >
                                        <p className="font-semibold text-gray-900 text-sm line-clamp-2">{event.name}</p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            {new Date(event.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}
                                        </p>
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Details Modal */}
            {isEventModalOpen && selectedEvent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Image Section */}
                        <div className="relative flex-shrink-0">
                            <img
                                src={selectedEvent.image}
                                alt={selectedEvent.name}
                                className="w-full h-64 object-cover"
                            />
                            <button
                                onClick={() => setIsEventModalOpen(false)}
                                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                <X className="w-6 h-6 text-gray-900" />
                            </button>
                        </div>

                        {/* Content Section - Scrollable */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedEvent.name}</h2>

                                <div className="flex items-center text-gray-600 mb-6">
                                    <Users className="w-4 h-4 mr-2" />
                                    <span className="text-sm">{selectedEvent.organizer}</span>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed">{selectedEvent.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="flex items-start space-x-3">
                                        <Calendar className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Date</p>
                                            <p className="font-semibold text-gray-900">{formatDate(selectedEvent.date)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Time</p>
                                            <p className="font-semibold text-gray-900">{selectedEvent.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Location</p>
                                            <p className="font-semibold text-gray-900">{selectedEvent.location}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2">Price</p>
                                        <p className="text-3xl font-bold text-purple-600">{selectedEvent.price}</p>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <p className="text-sm text-gray-600 mb-3">{selectedEvent.sold}/{selectedEvent.capacity} registered</p>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-purple-600 h-3 rounded-full transition-all duration-300"
                                            style={{ width: `${(selectedEvent.sold / selectedEvent.capacity) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Buttons Section - Sticky Footer */}
                        <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 p-8 flex gap-3">
                            <button
                                disabled={!selectedEvent.available || selectedEvent.sold >= selectedEvent.capacity}
                                className={`flex-1 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${selectedEvent.available && selectedEvent.sold < selectedEvent.capacity
                                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                <Ticket className="w-4 h-4" />
                                <span>
                                    {selectedEvent.sold >= selectedEvent.capacity ? 'Event Closed' : 'Register Here'}
                                </span>
                            </button>
                            <button
                                onClick={() => setIsEventModalOpen(false)}
                                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay when calendar is open */}
            {isCalendarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-20"
                    onClick={() => setIsCalendarOpen(false)}
                />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
                        Upcoming Student Association <span className="text-purple-600">Events</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 break-words">
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

                                <div className="flex-1 p-4 sm:p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 break-words">{event.name}</h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 text-gray-600 mb-2 text-sm">
                                                <div className="flex items-center">
                                                    <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                                                    <span className="break-words">Organized by {event.organizer}</span>
                                                </div>
                                                <div className="flex items-center sm:ml-4">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1 flex-shrink-0" />
                                                    <span>{event.rating}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm:text-right flex-shrink-0">
                                            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
                                                {event.price}
                                            </div>
                                            <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                                                {event.sold}/{event.capacity} registered
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 text-sm sm:text-base break-words">{event.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 text-xs sm:text-sm">
                                        <div className="flex items-start sm:items-center gap-2 text-gray-600 min-w-0">
                                            <Calendar className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                                            <div className="break-words">
                                                <div className="font-medium">{formatDate(event.date)}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 min-w-0">
                                            <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                            <span className="break-words">{event.time}</span>
                                        </div>
                                        <div className="flex items-start sm:items-center gap-2 text-gray-600 min-w-0">
                                            <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                                            <span className="break-words">{event.location}</span>
                                        </div>
                                    </div>

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
                                        <button
                                            onClick={() => handleEventClick(event)}
                                            className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
                                        >
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
