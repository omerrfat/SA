import React, { useState } from 'react';
import { Users, Search, Filter, ArrowRight } from 'lucide-react';

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
            location: 'Computer Science Building',
            image: '/Latest Logo CS/IMG_5176_Selina Yeoh.jpeg',
            tags: ['Programming', 'Networking', 'Tech'],
            instagram: 'https://www.instagram.com/unm.css?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        },
        {
            id: 2,
            name: 'Nottingham University Football Club',
            category: 'sports',
            members: 180,
            description: 'Train with our teams, compete in university leagues, and enjoy the beautiful game.',
            location: 'Sports Complex',
            image: '/Latest Logo CS/nufc_logo v2_Chirenjiv Singh Nija.PNG',
            tags: ['Team Sports', 'Fitness', 'Competition'],
            instagram: '',
        },
        {
            id: 3,
            name: 'Youth Entrepreneur Society',
            category: 'cultural',
            members: 320,
            description: 'Inspire your entrepreneurial spirit, learn from successful founders, and launch your own ventures.',
            location: 'Student Union',
            image: '/Latest Logo CS/Y.E.S. Logo Colour 2025-06-23 08_54_45_Yi Gan.png',
            tags: ['Entrepreneurship', 'Business', 'Mentorship'],
            instagram: '',
        },
        {
            id: 4,
            name: 'Writers Society',
            category: 'academic',
            members: 95,
            description: 'Share your passion for writing, attend workshops, and publish your work in our annual anthology.',
            location: 'Arts Building',
            image: '/Latest Logo CS/6fa8cafc-d0fc-4c57-8dd1-9eca5159bc86_Sumaiyya Farid Wajid.png',
            tags: ['Writing', 'Literature', 'Creative'],
            instagram: '',
        },
        {
            id: 5,
            name: 'Baking Society',
            category: 'volunteer',
            members: 240,
            description: 'Learn to bake delicious treats, share recipes, and volunteer at local food banks and community events.',
            location: 'Student Union',
            image: '/Latest Logo CS/BakeSoc logo transparent background_Sabrina Tai.png',
            tags: ['Baking', 'Cooking', 'Community'],
            instagram: '',
        },
        {
            id: 6,
            name: 'UNMC Cheerleading Club',
            category: 'cultural',
            members: 150,
            description: 'Join our energetic cheerleading team, perform at sports events, and compete in national cheer competitions.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Beast Logo Updated_Tasha Tan.jpeg',
            tags: ['Dance', 'Performance', 'Sports'],
            instagram: '',
        },
        {
            id: 7,
            name: 'Chinese Cultural Society',
            category: 'cultural',
            members: 150,
            description: 'Celebrate Chinese culture, traditions, and cuisine with fellow students.',
            location: 'Student Union',
            image: '/Latest Logo CS/CCS_colour (1)_Yi Wong.png',
            tags: ['Culture', 'Tradition', 'Asian'],
            instagram: '',
        },
        {
            id: 8,
            name: 'UNM Ultimate Frisbee Club',
            category: 'cultural',
            members: 150,
            description: 'Join our ultimate frisbee team, participate in tournaments, and enjoy the fun of the sport.',
            location: 'Media Centre',
            image: '/Latest Logo CS/club logo_Hoi Yoong.jpg',
            tags: ['Sports', 'Outdoor', 'Team Games'],
            instagram: '',
        },
        {
            id: 9,
            name: 'BioScience Students in Notts',
            category: 'cultural',
            members: 150,
            description: 'Connect with fellow BioScience students, attend guest lectures, and explore career opportunities in the field.',
            location: 'Media Centre',
            image: '/Latest Logo CS/bsn_Vanessa St Steven.png',
            tags: ['Science', 'Biology', 'Career'],
            instagram: '',
        },
        {
            id: 10,
            name: 'Aikido Shudokan Nottingham Club',
            category: 'cultural',
            members: 150,
            description: 'Learn the ancient martial art of Aikido, develop discipline, and connect with fellow practitioners in a community.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Club_logo Aikido Shudokan Nottingham Club_Michael Foong.png',
            tags: ['Martial Arts', 'Fitness', 'Wellness'],
            instagram: '',
        },
        {
            id: 11,
            name: 'UNM Christian Fellowship',
            category: 'cultural',
            members: 150,
            description: 'Join our Christian fellowship, participate in weekly meetings, and connect with like-minded students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Copy of CF logo (black)_David Wei Xiang Tee.png',
            tags: ['Religion', 'Faith', 'Community'],
            instagram: '',
        },
        {
            id: 12,
            name: 'UNM Netball Club',
            category: 'cultural',
            members: 150,
            description: 'Join our netball club, participate in tournaments, and enjoy the fun of the sport.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Copy of Copy_of_new_logo-removebg-preview_Afiqah Ahmad Rushdan.png',
            tags: ['Sports', 'Fitness', 'Competition'],
            instagram: '',
        },
        {
            id: 13,
            name: 'Engineers Without Borders',
            category: 'cultural',
            members: 150,
            description: 'Join our Engineers Without Borders club, participate in community projects, and make a difference.',
            location: 'Media Centre',
            image: '/Latest Logo CS/EWBM-UNM Logo_Yan Jie Koo.png',
            tags: ['Engineering', 'Social Impact', 'Volunteering'],
            instagram: '',
        },
        {
            id: 14,
            name: 'UNM Film Society',
            category: 'cultural',
            members: 150,
            description: 'Join our Film Society, participate in film screenings, and explore the world of cinema.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Filmsoc Logo_Vanessa Nambiar.png',
            tags: ['Cinema', 'Films', 'Media'],
            instagram: '',
        },
        {
            id: 15,
            name: 'IChemE Student Chapter',
            category: 'cultural',
            members: 150,
            description: 'Join our IChemE Student Chapter, participate in events, and connect with fellow chemical engineering students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/IChemE Grey Green Transparent BG - Copy (4)_Ameera Safiyah Izmir.png',
            tags: ['Engineering', 'Chemical', 'Professional'],
            instagram: '',
        },
        {
            id: 16,
            name: 'IEEE UNM Student Branch',
            category: 'cultural',
            members: 150,
            description: 'Join our IEEE UNM Student Branch, participate in events, and connect with fellow engineering students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/IEEE_UNM_LOGO_Marcus Min Jie Yew.png',
            tags: ['Engineering', 'Electronics', 'Professional'],
            instagram: '',
        },
        {
            id: 17,
            name: 'IEM UNM Student Section',
            category: 'cultural',
            members: 150,
            description: 'Join our IEM UNM Student Section, participate in events, and connect with fellow engineering students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/IEM UNM SS Logo_Danielle Lim.jpeg',
            tags: ['Engineering', 'Professional', 'Development'],
            instagram: '',
        },
        {
            id: 18,
            name: 'IMechE Student Chapter',
            category: 'cultural',
            members: 150,
            description: 'Join our IMechE Student Chapter, participate in events, and connect with fellow engineering students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/IMechE Logo (1)_Tanageswari Balamura.png',
            tags: ['Engineering', 'Mechanical', 'Professional'],
            instagram: '',
        },
        {
            id: 19,
            name: 'African Society',
            category: 'cultural',
            members: 150,
            description: 'Join our African Society, celebrate African culture, and connect with fellow students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/IMG_6041_Zainab Mohamedbhai.jpeg',
            tags: ['Culture', 'Diversity', 'Community'],
            instagram: '',
        },
        {
            id: 20,
            name: 'Swimming Club',
            category: 'cultural',
            members: 150,
            description: 'Join our Swimming Club, participate in swimming events, and stay fit.',
            location: 'Media Centre',
            image: '/Latest Logo CS/IMG_7390_Chan Loke.jpeg',
            tags: ['Sports', 'Fitness', 'Water Sports'],
            instagram: '',
        },
        {
            id: 21,
            name: 'Nottingham Cricket Club',
            category: 'cultural',
            members: 150,
            description: 'Join our Nottingham Cricket Club, participate in cricket events, and enjoy the sport.',
            location: 'Media Centre',
            image: '/Latest Logo CS/IMG-20241021-WA0012_Ihfaz Hussain Chowdh.jpg',
            tags: ['Sports', 'Fitness', 'Cricket'],
            instagram: '',
        },
        {
            id: 22,
            name: 'Pakistan Society',
            category: 'cultural',
            members: 150,
            description: 'Join our Pakistan Society, celebrate Pakistani culture, and connect with fellow students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/IMG-20250719-WA0012_Usman Ahmed Khan.jpg',
            tags: ['Culture', 'Community', 'Asian'],
            instagram: '',
        },
        {
            id: 23,
            name: 'Indonesian Society',
            category: 'cultural',
            members: 150,
            description: 'Join our Indonesian Society, celebrate Indonesian culture, and connect with fellow students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Indosoc logo_Jephtha Ashter Tandr.png',
            tags: ['Culture', 'Community', 'Asian'],
            instagram: '',
        },
        {
            id: 25,
            name: 'Islamic Society',
            category: 'religious',
            members: 150,
            description: 'Join our Islamic Society, celebrate Islamic culture.',
            location: 'Media Centre',
            image: '/Latest Logo CS/ISoc (black)_Ibrahim Hassan.png',
            tags: ['Religion', 'Faith', 'Community'],
            instagram: '',
        },
        {
            id: 26,
            name: 'Japanese Society',
            category: 'cultural',
            members: 150,
            description: 'Join our Japanese Society, celebrate Japanese culture, and connect with fellow students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/JSOC Logo_HigherQuality_Aidan Gerard Ju Kwan.png',
            tags: ['Culture', 'Language', 'Asian'],
            instagram: '',
        },
        {
            id: 27,
            name: 'Literature and Drama Society',
            category: 'cultural',
            members: 150,
            description: 'Join our Literature and Drama Society, explore creative writing, and participate in theatrical events.',
            location: 'Media Centre',
            image: '/Latest Logo CS/LADS Logo w text (PNG Version)_Ee Lim.png',
            tags: ['Drama', 'Theater', 'Performance'],
            instagram: '',
        },
        {
            id: 28,
            name: 'UNM Volleyball Club',
            category: 'sports',
            members: 150,
            description: 'Join our UNM Volleyball Club, participate in volleyball events, and stay fit.',
            location: 'Media Centre',
            image: '/Latest Logo CS/LOGO_2021 (B_W)_Jing Yap.png',
            tags: ['Sports', 'Fitness', 'Team Games'],
            instagram: '',
        },
        {
            id: 29,
            name: 'UNM Analytics and Accounting Society',
            category: 'academic',
            members: 150,
            description: 'Join our UNM Analytics and Accounting Society, explore career opportunities in analytics and accounting.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Logo_dark_Chloe Zhen Yin Ang.png',
            tags: ['Business', 'Accounting', 'Career'],
            instagram: '',
        },
        {
            id: 30,
            name: 'UNM Math Society',
            category: 'academic',
            members: 150,
            description: 'Join our UNM Math Society, explore mathematical concepts, and participate in problem-solving events.',
            location: 'Media Centre',
            image: '/Latest Logo CS/MathSOC_Logo_Mohamed Fahd Haris S.jpeg',
            tags: ['Mathematics', 'Problem Solving', 'Academic'],
            instagram: '',
        },
        {
            id: 31,
            name: 'Nottingham Economics Society',
            category: 'academic',
            members: 150,
            description: 'Join our Nottingham Economics Society, explore economic theories, and participate in discussions.',
            location: 'Media Centre',
            image: '/Latest Logo CS/NES LOGO UPDATE PURPLE BG-01_Shun Peng.png',
            tags: ['Business', 'Economics', 'Academic'],
            instagram: '',
        },
        {
            id: 32,
            name: 'Nottingham Clover Guides Society',
            category: 'academic',
            members: 150,
            description: 'Join our platform for young women to evolove professionally, explore adventure and to be an active citizen!',
            location: 'Media Centre',
            image: '/Latest Logo CS/Nottingham Clover Guides Society Logo_Fathima Hasna Ahamed.png',
            tags: ['Women Empowerment', 'Leadership', 'Adventure'],
            instagram: '',
        },
        {
            id: 33,
            name: 'Nottingham University Basketball Club',
            category: 'sports',
            members: 150,
            description: 'Join our Nottingham University Basketball Club, participate in basketball events, and stay fit.',
            location: 'Media Centre',
            image: '/Latest Logo CS/NUBC Logo Uncut_Harvey Han Yi Khaw.jpg',
            tags: ['Sports', 'Fitness', 'Team Games'],
            instagram: '',
        },
        {
            id: 34,
            name: 'Gaming Society',
            category: 'sports',
            members: 150,
            description: 'Join our Gaming Society, participate in gaming events, and stay fit.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Official_Haye Donne Foong.png',
            tags: ['Gaming', 'E-Sports', 'Entertainment'],
            instagram: '',
        },
        {
            id: 35,
            name: 'Spir-Nott',
            category: 'academic',
            members: 150,
            description: 'We are an academic society in UNM that focuses on global affairs and politics.',
            location: 'Media Centre',
            image: '/Latest Logo CS/PFP (Themed)_Ammar Azril.png',
            tags: ['Politics', 'Global Affairs', 'Discussion'],
            instagram: '',
        },
        {
            id: 36,
            name: 'PharmNotts',
            category: 'academic',
            members: 150,
            description: 'Join our phramacy society, explore pharmaceutical sciences, and connect with fellow students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/PharmNotts Logo (Transparent - Dark Blue)_En Kung.jpeg',
            tags: ['Pharmacy', 'Healthcare', 'Medical'],
            instagram: '',
        },
        {
            id: 37,
            name: 'PsychSoc',
            category: 'academic',
            members: 150,
            description: 'Join our Psychology Society, explore psychological concepts, and connect with fellow students.',
            location: 'Media Centre',
            image: '/Latest Logo CS/PsychSoc Logo_Wyn Chan.png',
            tags: ['Psychology', 'Mental Health', 'Academic'],
            instagram: '',
        },
        {
            id: 38,
            name: 'Robotic Society',
            category: 'academic',
            members: 150,
            description: 'Join our Robotic Society, explore robotics, and build amazing projects.',
            location: 'Media Centre',
            image: '/Latest Logo CS/RSlogo_Eugene Ooi.png',
            tags: ['Robotics', 'Engineering', 'Innovation'],
            instagram: '',
        },
        {
            id: 39,
            name: 'Archery Club',
            category: 'sports',
            members: 150,
            description: 'Join our Archery Club, learn archery skills, and participate in competitions.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Screenshot 2025-07-18 at 6.51.26 PM_Gabriel Quah.png',
            tags: ['Sports', 'Archery', 'Outdoor'], instagram: '',
        },
        {
            id: 40,
            name: 'UNM Catholic Students Society',
            category: 'religious',
            members: 150,
            description: 'Join our Catholic Students Society, connect with fellow students, and participate in faith-based events.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Screenshot 2026-02-24 175937.png',
            tags: ['Religion', 'Faith', 'Community'],
            instagram: '',
        },
        {
            id: 41,
            name: 'Sri Lankan Society',
            category: 'cultural',
            members: 150,
            description: 'Join our Sri Lankan Society, connect with fellow students, and participate in cultural events.',
            location: 'Media Centre',
            image: '/Latest Logo CS/SLSOC Logo_Jithindu Athapaththu.png',
            tags: ['Culture', 'Community', 'Asian'],
            instagram: '',
        },
        {
            id: 42,
            name: 'Society of Fine Arts',
            category: 'academic',
            members: 150,
            description: 'Join our Society of Fine Arts, connect with fellow students, and participate in artsy events.',
            location: 'Media Centre',
            image: '/Latest Logo CS/SOFA Logo_Nur Mohd Badrulzaman.png',
            tags: ['Art', 'Visual Arts', 'Creative'],
            instagram: '',
        },
        {
            id: 43,
            name: 'Stress Relieve Society',
            category: 'academic',
            members: 150,
            description: 'Join our Stress Relieve Society, connect with fellow students, and participate in stress-relieving activities.',
            location: 'Media Centre',
            image: '/Latest Logo CS/SRS logo transparent BG (1) (1)_Janani Muniandy.png',
            tags: ['Wellness', 'Mental Health', 'Relaxation'],
            instagram: '',
        },
        {
            id: 44,
            name: 'UNM Tennis Club',
            category: 'sports',
            members: 150,
            description: 'Join our UNM Tennis Club, connect with fellow students, and participate in tennis matches.',
            location: 'Media Centre',
            image: '/Latest Logo CS/tennis club logo (green)_Benjamin Ming Yeow G.png',
            tags: ['Sports', 'Fitness', 'Outdoor'],
            instagram: '',
        },
        {
            id: 45,
            name: 'UNM Touch Rugby Club',
            category: 'sports',
            members: 150,
            description: 'Join our UNM Touch Rugby Club, connect with fellow students, and participate in rugby matches.',
            location: 'Media Centre',
            image: '/Latest Logo CS/TouchLogo_Nashita Marjan.png',
            tags: ['Sports', 'Fitness', 'Rugby'],
            instagram: '',
        },
        {
            id: 46,
            name: 'UNM Billiards Club',
            category: 'sports',
            members: 150,
            description: 'Join our UNM Billiards Club, connect with fellow students, and participate in billiards matches.',
            location: 'Media Centre',
            image: '/Latest Logo CS/UNM Billiards Club Logo_Li Pua.png',
            tags: ['Games', 'Billiards', 'Social'],
            instagram: '',
        },
        {
            id: 47,
            name: 'UNM BioMed Club',
            category: 'academic',
            members: 150,
            description: 'Join our UNM BioMed Club, connect with fellow students, and participate in biomedical events.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Screenshot 2026-02-24 182011.png',
            tags: ['Science', 'Biomedical', 'Medical'],
            instagram: '',
        },
        {
            id: 48,
            name: 'UNM Investment Club',
            category: 'academic',
            members: 150,
            description: 'Join our UNM Investment Club, connect with fellow students, and participate in investment-related events.',
            location: 'Media Centre',
            image: '/Latest Logo CS/UNMIC New Logo Transparent_Teck Liew.png',
            tags: ['Finance', 'Business', 'Career'],
            instagram: '',
        },
        {
            id: 49,
            name: 'UNM Dodgeball Club',
            category: 'sport',
            members: 150,
            description: 'Join our Dodgeball Club, connect with fellow students, and participate in dodgeball events.',
            location: 'Media Centre',
            image: '/Latest Logo CS/Wolves Full Colour Transparent Logo_Collen Yang.png',
            tags: ['Sports', 'Fitness', 'Team Games'],
            instagram: '',
        },
    ]

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
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-down">
                        CS <span className="text-purple-600">Registration</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
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
                    {filteredClubs.map((club, index) => (
                        <div
                            key={club.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-scale-in hover:scale-105"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className="flex flex-col">
                                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={club.image}
                                        alt={club.name}
                                        className="max-w-[80%] max-h-[80%] object-contain"
                                    />
                                </div>
                                <div className="flex-1 p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-bold text-xl text-gray-900">{club.name}</h3>
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-2">{club.description}</p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Users className="w-4 h-4 mr-2" />
                                            {club.members} members
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

                                    <button
                                        onClick={() => club.instagram && window.open(club.instagram, '_blank')}
                                        disabled={!club.instagram}
                                        className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span>Get in Contact</span>
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