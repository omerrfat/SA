import { useState } from 'react';
import { Ticket, Calendar, MapPin, Clock, Search, Users, X, ChevronLeft, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';

const EventTickets = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);

    const categories = [
        { id: 'all', name: 'All Events' },
        { id: 'social', name: 'Social Events' },
        { id: 'academic', name: 'Academic' },
        { id: 'cultural', name: 'Cultural' },
        { id: 'sports', name: 'Sports' },
        { id: 'entertainment', name: 'Entertainment' },
    ];

    const events: any[] = [];

    const filteredEvents = events.filter(event => {
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Calendar logic
    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const getEventsForDate = (day: number) => {
        const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.filter(event => event.date === dateStr);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const handleEventClick = (event: typeof events[0]) => {
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

    const isToday = (day: number) => {
        const today = new Date();
        return (
            day === today.getDate() &&
            currentMonth.getMonth() === today.getMonth() &&
            currentMonth.getFullYear() === today.getFullYear()
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-8">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 animate-fade-in">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 break-words animate-slide-down">
                        Upcoming Students' Association <span className="text-purple-600">Events</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 break-words animate-slide-up">
                        Register for exciting events organized by clubs and societies across campus
                    </p>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mb-8 text-center text-white animate-scale-in">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-down">
                        Want to Organize Your Own Event?
                    </h2>
                    <p className="text-purple-100 mb-6 max-w-2xl mx-auto animate-slide-up">
                        Contact the Students' Association to get help organizing and promoting your club or society events.
                    </p>
                    <button
                        onClick={() => window.open('https://forms.office.com/r/AbKGLk7uQb', '_blank')}
                        className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 hover:scale-105 transform"
                    >
                        Include My Event
                    </button>
                </div>

                {/* Live Calendar Reveal */}
                <div className="mb-8 max-w-sm sm:max-w-md mx-auto" style={{ perspective: '1600px' }}>
                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                        aria-expanded={isCalendarOpen}
                        className={`group relative w-full overflow-hidden text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-5 shadow-xl shadow-purple-900/20 transition-all duration-500 ease-out bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 ${isCalendarOpen
                            ? 'rounded-t-3xl rounded-b-none'
                            : 'rounded-3xl hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-0.5'
                            }`}
                    >
                        {/* animated sheen sweep */}
                        <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                        {/* soft ambient glow */}
                        <span className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-400/0 via-yellow-300/20 to-purple-400/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <span>Check out what's happening!</span>
                            <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 ${isCalendarOpen ? 'rotate-180' : ''}`} />
                        </span>
                    </button>

                    {/* Smooth height push (grid-rows trick) */}
                    <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isCalendarOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            }`}
                    >
                        <div className="overflow-hidden">
                            {/* 3D unfold wrapper - visually "grows out of" the button */}
                            <div
                                className={`transition-all ease-out ${isCalendarOpen ? 'opacity-100 duration-500 delay-100' : 'opacity-0 duration-300'}`}
                                style={{
                                    transformOrigin: 'top center',
                                    transform: isCalendarOpen
                                        ? 'rotateX(0deg) translateY(0px) scale(1)'
                                        : 'rotateX(-35deg) translateY(-18px) scale(0.92)',
                                    transitionProperty: 'transform, opacity',
                                }}
                            >
                                <div className="relative rounded-b-2xl border-x border-b border-purple-400/20 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 p-3.5 sm:p-5 shadow-2xl shadow-purple-950/60">
                                    {/* subtle inner glow ring */}
                                    <div className="pointer-events-none absolute inset-0 rounded-b-2xl ring-1 ring-inset ring-white/10" />
                                    <div className="pointer-events-none absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl" />

                                    {/* Month Navigation */}
                                    <div className="relative z-10 flex items-center justify-between mb-3">
                                        <button
                                            onClick={handlePrevMonth}
                                            className="rounded-full border border-white/10 bg-white/5 p-1.5 text-white/80 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 hover:text-white hover:shadow-purple-500/30"
                                            aria-label="Previous month"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <h3 className="bg-gradient-to-r from-purple-200 via-white to-indigo-200 bg-clip-text text-sm sm:text-base font-bold text-transparent">
                                            {currentMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                                        </h3>
                                        <button
                                            onClick={handleNextMonth}
                                            className="rounded-full border border-white/10 bg-white/5 p-1.5 text-white/80 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 hover:text-white hover:shadow-purple-500/30"
                                            aria-label="Next month"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="relative z-10 space-y-1.5">
                                        {/* Weekday Headers */}
                                        <div className="grid grid-cols-7 gap-1 mb-1">
                                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                                <div key={day} className="text-center text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-purple-300/70">
                                                    {day}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Calendar Days */}
                                        <div className="grid grid-cols-7 gap-1">
                                            {calendarDays.map((day, index) => {
                                                const dayEvents = day ? getEventsForDate(day) : [];
                                                const hasEvents = dayEvents.length > 0;
                                                const today = day ? isToday(day) : false;
                                                return (
                                                    <div
                                                        key={index}
                                                        className={`relative aspect-square rounded-lg text-center text-[11px] sm:text-xs font-medium transition-all duration-200 ${!day
                                                            ? ''
                                                            : hasEvents
                                                                ? 'cursor-pointer bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-900/50 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60'
                                                                : today
                                                                    ? 'border border-yellow-300/60 bg-white/10 text-yellow-200 hover:bg-white/20'
                                                                    : 'border border-white/5 bg-white/5 text-purple-100/70 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white'
                                                            }`}
                                                    >
                                                        {day && (
                                                            <div className="flex h-full w-full flex-col items-center justify-center">
                                                                <span>{day}</span>
                                                                {hasEvents && (
                                                                    <span className="mt-0.5 h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_6px_rgba(253,224,71,0.9)]" />
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Events List for Current Month */}
                                    <div className="relative z-10 mt-4 border-t border-white/10 pt-3">
                                        <h3 className="mb-2 text-xs sm:text-sm font-bold text-white">Events This Month</h3>
                                        {events.filter(event => new Date(event.date).getMonth() === currentMonth.getMonth()).length === 0 ? (
                                            <p className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-purple-200/70">
                                                No events scheduled this month yet. Check back soon!
                                            </p>
                                        ) : (
                                            <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
                                                {events
                                                    .filter(event => new Date(event.date).getMonth() === currentMonth.getMonth())
                                                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                                                    .map(event => (
                                                        <button
                                                            key={event.id}
                                                            onClick={() => {
                                                                handleEventClick(event);
                                                                setIsCalendarOpen(false);
                                                            }}
                                                            className="w-full rounded-lg border border-white/10 bg-white/5 p-2 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300/40 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
                                                        >
                                                            <p className="line-clamp-2 text-xs font-semibold text-white">{event.name}</p>
                                                            <p className="mt-0.5 text-[10px] text-purple-200/70">
                                                                {new Date(event.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}
                                                            </p>
                                                        </button>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                                    {/* Star rating removed as it's not in the data */}
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
                    <div className="text-center py-16">
                        <Ticket className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Events Currently Ongoing</h3>
                        <p className="text-gray-600 text-lg">There are no events currently available. Please check back later for more exciting opportunities!</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default EventTickets;