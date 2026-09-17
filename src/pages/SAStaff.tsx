import { useState } from 'react';
import { Users } from 'lucide-react';
import Reveal from '../components/Reveal';
import TeamFilmstrip from '../components/TeamFilmstrip';
import TeamModal from '../components/TeamModal';
import { useStaggerReveal } from '../hooks/useGsapReveal';
import type { TeamMember } from '../types/team';

const SAStaff = () => {
    const [selected, setSelected] = useState<TeamMember | null>(null);

    const staffMembers: TeamMember[] = [
        {
            name: 'Divaghar Voothayakumar',
            position: 'SA Senior Officer',
            email: 'divaghar.voothayakumar@nottingham.edu.my',
            image: '/SA Staff/diva.jpeg',
            description: "The SA Senior Officer provides strategic oversight and guidance to the SA team. They ensure smooth day-to-day operations, coordinate with university administration, and oversee major organizational initiatives. This role is essential in maintaining the association's governance standards and supporting all senior staff responsibilities.",
            color: 'from-blue-600 to-blue-800',
        },
        {
            name: 'Gerard Aloysius Francis',
            position: 'SA Manager',
            email: 'Gerard.Francis@nottingham.edu.my',
            image: '/SA Staff/gerard.jpeg',
            description: 'The SA Manager handles operational management and team coordination. They oversee project timelines, resource allocation, and ensure all departments work cohesively. The Manager bridges leadership vision with practical implementation and maintains accountability across all SA initiatives.',
            color: 'from-green-600 to-green-800',
        },
        {
            name: 'Nurul Farah Ain Nazwir',
            position: 'SA Administrative Officer',
            email: 'nurul.nazwir@nottingham.edu.my',
            image: '/SA Staff/farah.jpeg',
            description: 'The SA Administrative Officer manages all administrative functions and documentation. They handle event logistics, financial records, scheduling, and communications coordination. This role ensures the organization runs efficiently and all processes are well-documented and accessible.',
            color: 'from-purple-600 to-purple-800',
        },
        {
            name: 'Nurul Syammimi Mohd Nazri',
            position: 'SA Officer',
            email: 'Syammimi.nazri@nottingham.edu.my',
            image: '/SA Staff/syammimi.jpeg',
            description: 'The SA Officers provide support across various departments and initiatives. They assist in event planning, member engagement, project execution, and administrative support. Officers are the backbone of day-to-day operations and help bring SA initiatives to life.',
            color: 'from-orange-600 to-orange-800',
        },
        {
            name: 'Zaki Syahmi',
            position: 'SA Senior Officer',
            email: 'Zaki.Syahmi@nottingham.edu.my',
            image: '/SA Staff/zaki.jpeg',
            description: "The SA Senior Officers provide strategic oversight and guidance to the SA team. They ensure smooth day-to-day operations, coordinate with university administration, and oversee major organizational initiatives. This role is essential in maintaining the association's governance standards and supporting all senior staff responsibilities.",
            color: 'from-cyan-600 to-cyan-800',
        },
    ];

    const gridRef = useStaggerReveal<HTMLDivElement>('.team-card');

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-slate-700 to-slate-900 text-white py-12 md:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{
                    backgroundImage: 'url("/SA Staff/collective.jpeg")'
                }}></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="flex items-center space-x-4 mb-4">
                            <Users className="w-8 h-8 md:w-10 md:h-10" />
                            <h1 className="text-3xl md:text-5xl font-bold">SA Staff</h1>
                        </div>
                        <p className="text-lg md:text-xl text-slate-100 max-w-3xl">
                            Meet the dedicated staff members who work behind the scenes to make the SA function smoothly and bring initiatives to life.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* About SA Staff Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12 border border-slate-200">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            About SA Staff
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            The SA Staff forms the operational backbone of the Students' Association, working tirelessly to support all student initiatives and ensure the smooth functioning of the organization.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            From strategic planning to day-to-day administration, our dedicated staff members are committed to creating an inclusive and vibrant campus community. They work collaboratively with student leadership to turn vision into action and ensure every SA initiative delivers maximum value to the student body.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Staff Members Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Leadership Team
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the experienced professionals guiding the Students' Association. Tap a card for their full role description.
                        </p>
                    </Reveal>

                    <div ref={gridRef}>
                        <TeamFilmstrip members={staffMembers} onOpen={setSelected} />
                    </div>
                </div>
            </section>

            <TeamModal member={selected} onClose={() => setSelected(null)} />
        </div>
    );
};

export default SAStaff;
