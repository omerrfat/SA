import { useState } from 'react';
import { Users } from 'lucide-react';
import Reveal from '../components/Reveal';
import TeamFilmstrip from '../components/TeamFilmstrip';
import TeamModal from '../components/TeamModal';
import { useStaggerReveal } from '../hooks/useGsapReveal';
import type { TeamMember } from '../types/team';

const StudentCouncil = () => {
    const [selected, setSelected] = useState<TeamMember | null>(null);

    const councilMembers: TeamMember[] = [
        {
            name: 'Nabil Aqlan Bin Mohd Faizal',
            position: 'Chairperson',
            email: 'council.chair@nottingham.edu.my',
            image: '/IMG_1894.jpeg',
            objective: 'Lead the Student Council with strategic vision and student representation.',
            description: "The Chairperson of Council is the one in charge of overseeing the whole Students' Association's constitution and the governance of the student led bodies. The main role is to ensure that student appointed representatives take charge of their assigned duties by multiple performance record measurements. The chair is also the one who sets the dates and venues for all the meeting and the one taking care of the Council's branding whether it is online or offline. He/she is also the main person to give guidance and advise to the student representatives in areas concerning students or simply their roles as representatives",
            color: 'from-purple-600 to-purple-800',
        },
        {
            name: 'Manasa Mukesh Shanker',
            position: 'Vice-Chairperson',
            email: 'council.vicechair@nottingham.edu.my',
            image: '/placeholder-council-2.jpg',
            objective: "The Vice-Chair of Council's objective is to ensure the smooth and procedurally correct operation of Council meetings, to deputize for the Chair when necessary, and to run the SA Elections.",
            description: 'The Vice-Chair of Council is responsible for the administration and effective functioning of the Council. Their key objective is to ensure correct protocol is observed during all Council meetings, thereby upholding order and procedural integrity. Furthermore, the Vice-Chair acts as the official deputy for the Chair of Council when necessary, temporarily taking over leadership duties. Their role also includes providing assistance to all other members of the Steering Committee in their respective duties, and crucially, they are responsible for running the SA General Elections.',
            color: 'from-blue-600 to-blue-800',
        },
        {
            name: 'Mohamed Said Mohamed Mokhtar Elbanna',
            position: 'Secretary',
            email: 'council.secretary@nottingham.edu.my',
            image: '/placeholder-council-3.jpg',
            objective: 'To ensure Student Council operates with clear, accurate, and transparent documentation by overseeing motion drafting, minutes, and reporting processes, hence supporting sound decision making and good governance.',
            description: 'The Secretary of Council is the Steering Committee officer responsible for the governance paperwork of Student Council. They draft and refine submitted motions and constitutional amendments, finalise Council minutes, liaise with Clubs & Societies on constitutional changes, set reporting headings, and ensure all officers and committees are informed of reporting requirements and deadlines. The Secretary also collects and collates Councillor Reports and works closely with thier Assistant Secretary to keep Council documentation accurate, timely, and accessible.',
            color: 'from-pink-600 to-pink-800',
        },
        {
            name: 'Dhia Aldeena Wibawa',
            position: 'Assistant Secretary',
            email: 'council.assistant@nottingham.edu.my',
            image: '/placeholder-council-4.jpg',
            objective: 'Support administrative functions and coordinate council operations.',
            description: "The Assistant Secretary supports the Secretary in managing the administrative, communication, and documentation functions of the Student Council. This includes assisting with the preparation of council papers, maintaining accurate records, coordinating documentation for motions and reports, and ensuring smooth flow of information among council members. The Assistant Secretary works closely with the Secretary to uphold transparency, organisation, and efficiency within the council's operations.",
            color: 'from-green-600 to-green-800',
        },
    ];

    const gridRef = useStaggerReveal<HTMLDivElement>('.team-card');

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="flex items-center space-x-4 mb-4">
                            <Users className="w-8 h-8 md:w-10 md:h-10" />
                            <h1 className="text-3xl md:text-5xl font-bold">Student Council</h1>
                        </div>
                        <p className="text-lg md:text-xl text-purple-100 max-w-3xl">
                            The Student Council works to improve the student experience and coordinate key initiatives across campus.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* About Council Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-purple-100">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            About the Student Council
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            The Student Council is the representative body for all students at the University of Nottingham Malaysia.
                            Comprising elected and appointed student leaders, the council serves as the bridge between the student body
                            and university administration.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            The council's mission is to enhance the student experience, advocate for student interests, organize
                            meaningful events, and create an inclusive community where every student voice is heard and valued. Through
                            collaborative efforts and strategic leadership, the Student Council drives positive change and fosters a
                            vibrant campus culture.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Council Members Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Council Leadership
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the dedicated team leading the Student Council. Tap a card for their full objective and role.
                        </p>
                    </Reveal>

                    <div ref={gridRef}>
                        <TeamFilmstrip members={councilMembers} onOpen={setSelected} />
                    </div>
                </div>
            </section>

            <TeamModal member={selected} onClose={() => setSelected(null)} />
        </div>
    );
};

export default StudentCouncil;
