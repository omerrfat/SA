import React, { useState, useRef } from 'react';
import { ShoppingBag, Shirt, Star, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const NottAShop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const modelPhotosRef = useRef(null);

    // Hide scrollbar styles
    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .hide-scrollbar::-webkit-scrollbar {
                display: none;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const categories = [
        { id: 'all', name: 'All Items', icon: ShoppingBag },
        { id: 'club-merch', name: 'Club Merchandise', icon: ShoppingBag },
        { id: 'official', name: 'Official Nottingham', icon: ShoppingBag },
    ];

    const modelPhotos = [
        {
            id: 1,
            url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
            caption: 'CS Society T-Shirt',
        },
        {
            id: 2,
            url: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600',
            caption: 'Official Nottingham Hoodie',
        },
        {
            id: 3,
            url: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
            caption: 'Football Club Jersey',
        },
        {
            id: 4,
            url: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
            caption: 'Casual Thrift Style',
        },
        {
            id: 5,
            url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
            caption: 'Photography Club Tote Bag',
        },
    ];

    const products = [
        // Club Merchandise
        {
            id: 4,
            name: 'CS Society T-Shirt',
            price: 'RM18.00',
            category: 'club-merch',
            type: 'Club Merch',
            image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
            condition: 'New',
        },
        {
            id: 5,
            name: 'Football Club Jersey',
            price: 'RM25.00',
            category: 'club-merch',
            type: 'Club Merch',
            image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400',
            condition: 'New',
        },
        {
            id: 6,
            name: 'Photography Club Tote Bag',
            price: 'RM10.00',
            category: 'club-merch',
            type: 'Club Merch',
            image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=400',
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

            condition: 'New',
        },
        {
            id: 8,
            name: 'Nottingham Malaysia Campus Mug',
            price: 'RM12.00',
            category: 'official',
            type: 'Official Merch',
            image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
            condition: 'New',
        },
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.type.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const scrollLeft = () => {
        if (modelPhotosRef.current) {
            modelPhotosRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (modelPhotosRef.current) {
            modelPhotosRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

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
                {/* Model Photos Section */}
                <div className="mb-12">
                    <div className="relative">
                        {/* Left Scroll Button */}
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6 text-purple-600" />
                        </button>

                        {/* Right Scroll Button */}
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6 text-purple-600" />
                        </button>

                        {/* Scrollable Gallery */}
                        <div
                            ref={modelPhotosRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth px-12 hide-scrollbar"
                            style={{
                                scrollBehavior: 'smooth',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            {modelPhotos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="flex-shrink-0 w-96 h-[28rem] rounded-2xl overflow-hidden shadow-lg group"
                                >
                                    <div className="relative w-full h-full">
                                        <img
                                            src={photo.url}
                                            alt={photo.caption}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Overlay with Caption */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white font-semibold text-lg">{photo.caption}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                                </div>
                                <div>
                                    <p>Small Description</p>
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