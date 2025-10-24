import React, { useState } from 'react';
import { ShoppingBag, Shirt, Star, Search } from 'lucide-react';

const NottAShop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Items', icon: ShoppingBag },
        { id: 'thrift', name: 'Thrift Items', icon: Shirt },
        { id: 'club-merch', name: 'Club Merchandise', icon: ShoppingBag },
        { id: 'official', name: 'Official Nottingham', icon: ShoppingBag },
    ];

    const products = [
        // Thrift Items
        {
            id: 1,
            name: 'Vintage Denim Jacket',
            price: 'RM15.00',
            category: 'thrift',
            type: 'Thrift',
            image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.4,
            inStock: true,
            condition: 'Good',
        },
        {
            id: 2,
            name: 'Retro Band T-Shirt',
            price: 'RM8.00',
            category: 'thrift',
            type: 'Thrift',
            image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.2,
            inStock: true,
            condition: 'Excellent',
        },
        {
            id: 3,
            name: 'Wool Sweater',
            price: 'RM12.00',
            category: 'thrift',
            type: 'Thrift',
            image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.6,
            inStock: true,
            condition: 'Very Good',
        },
        // Club Merchandise
        {
            id: 4,
            name: 'CS Society T-Shirt',
            price: 'RM18.00',
            category: 'club-merch',
            type: 'Club Merch',
            image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.8,
            inStock: true,
            condition: 'New',
        },
        {
            id: 5,
            name: 'Football Club Jersey',
            price: 'RM25.00',
            category: 'club-merch',
            type: 'Club Merch',
            image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.7,
            inStock: true,
            condition: 'New',
        },
        {
            id: 6,
            name: 'Photography Club Tote Bag',
            price: 'RM10.00',
            category: 'club-merch',
            type: 'Club Merch',
            image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.5,
            inStock: true,
            condition: 'New',
        },
        // Official Nottingham Merchandise
        {
            id: 7,
            name: 'University of Nottingham Hoodie',
            price: 'RM45.00',
            category: 'official',
            type: 'Official Merch',
            image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.9,
            inStock: true,
            condition: 'New',
        },
        {
            id: 8,
            name: 'Nottingham Malaysia Campus Mug',
            price: 'RM12.00',
            category: 'official',
            type: 'Official Merch',
            image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
            rating: 4.6,
            inStock: true,
            condition: 'New',
        },
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.type.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Merchandises
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        featuring merchandise from Nott-A-Shop, various clubs & societies and 2nd hand thrift items.
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
                                placeholder="Search for items..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`flex items-center space-x-2 px-4 py-3 rounded-xl whitespace-nowrap font-medium transition-colors duration-200 ${activeCategory === category.id
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{category.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                                        {product.type}
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.condition === 'New' ? 'bg-green-100 text-green-700' :
                                        product.condition === 'Excellent' ? 'bg-blue-100 text-blue-700' :
                                            product.condition === 'Very Good' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-gray-100 text-gray-700'
                                        }`}>
                                        {product.condition}
                                    </span>
                                </div>
                                {!product.inStock && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                                            Out of Stock
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                                <div className="flex items-center space-x-1 mb-3">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm text-gray-600">{product.rating}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                                    <button
                                        disabled={!product.inStock}
                                        className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${product.inStock
                                            ? 'bg-purple-600 text-white hover:bg-purple-700'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                )}

                {/* Info Section */}
                <div className="bg-yellow-400 rounded-2xl p-8 mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
                        Sustainable Shopping at Its Best
                    </h2>
                    <p className="text-purple-800 mb-6 max-w-2xl mx-auto">
                        Shop sustainably with our thrift items, support your favorite clubs with their merchandise,
                        or get official University of Nottingham gear - all in one place!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                            <h3 className="font-semibold text-purple-900 mb-2">Eco-Friendly</h3>
                            <p className="text-sm text-purple-800">Reduce waste with second-hand items</p>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                            <h3 className="font-semibold text-purple-900 mb-2">Support Clubs</h3>
                            <p className="text-sm text-purple-800">Buy merch to support student organizations</p>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                            <h3 className="font-semibold text-purple-900 mb-2">Official Gear</h3>
                            <p className="text-sm text-purple-800">Authentic Nottingham merchandise</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NottAShop;