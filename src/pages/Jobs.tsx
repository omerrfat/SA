import React, { useState } from 'react';
import { Briefcase, Clock, MapPin, DollarSign, Search, Star, Building } from 'lucide-react';

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');

    const categories = [
        { id: 'all', name: 'All Categories' },
        { id: 'campus', name: 'Campus Jobs' },
        { id: 'retail', name: 'Retail' },
        { id: 'food', name: 'Food Service' },
        { id: 'tutoring', name: 'Tutoring' },
        { id: 'admin', name: 'Administrative' },
        { id: 'tech', name: 'Technology' },
    ];

    const jobTypes = [
        { id: 'all', name: 'All Types' },
        { id: 'part-time', name: 'Part-time' },
        { id: 'work-study', name: 'Work-Study' },
        { id: 'freelance', name: 'Freelance' },
        { id: 'internship', name: 'Internship' },
    ];

    const jobs = [];

    const filteredJobs = jobs.filter(job => {
        const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
        const matchesType = selectedType === 'all' || job.type === selectedType;
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesType && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Student <span className="text-purple-600">Job Opportunities</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Earn money while studying with flexible part-time positions designed for students
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="lg:col-span-1 relative">
                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        {/* Type Filter */}
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            {jobTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-2xl font-bold text-green-600 mb-2">800+</div>
                        <div className="text-gray-600">Students Employed</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-2">20</div>
                        <div className="text-gray-600">Max Hours/Week</div>
                    </div>
                </div>

                {/* Jobs Grid */}
                <div className="space-y-6 mb-16">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                <img
                                    src={job.image}
                                    alt={job.title}
                                    className="w-full lg:w-32 h-32 object-cover rounded-xl"
                                />

                                <div className="flex-1">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                            <div className="flex items-center text-gray-600 mb-2">
                                                <Building className="w-4 h-4 mr-2" />
                                                <span>{job.company}</span>
                                                <div className="flex items-center ml-4">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                    <span className="text-sm">{job.rating}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                                                {job.type}
                                            </span>
                                            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                                                {job.posted}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4">{job.description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                                            {job.salary}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Clock className="w-4 h-4 mr-2 text-blue-600" />
                                            {job.hours}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 mr-2 text-red-600" />
                                            {job.location}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                            {job.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex-1">
                                            Apply Now
                                        </button>
                                        <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200">
                                            Save Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredJobs.length === 0 && (
                    <div className="text-center py-12">
                        <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Jobs Currently Available</h3>
                        <p className="text-gray-600">Check back soon for new opportunities!</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mb-8 text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Start Your Career Journey?
                    </h2>
                    <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                        Join hundreds of students who are gaining valuable work experience while earning money to support their studies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200">
                            Create Job Alert
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                            Upload Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;