import React, { useRef } from 'react';
import { Mail, X } from 'lucide-react';
import { gsap, useGSAP } from '../lib/gsap';
import type { TeamMember } from '../types/team';

interface TeamModalProps {
    member: TeamMember | null;
    onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!member || !panelRef.current || !backdropRef.current) return;
            gsap.fromTo(backdropRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, ease: 'power2.out' });
            gsap.fromTo(
                panelRef.current,
                { autoAlpha: 0, y: 24, scale: 0.97 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
            );
        },
        { dependencies: [member], scope: backdropRef }
    );

    if (!member) return null;

    return (
        <div
            ref={backdropRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-purple-950/60 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                ref={panelRef}
                className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`relative flex-shrink-0 overflow-hidden bg-gradient-to-br ${member.color} p-6 md:p-8`}>
                    <div className="pointer-events-none absolute inset-0 bg-black/10" />
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-lg transition-colors hover:bg-white"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5 text-gray-900" />
                    </button>
                    <div className="relative pr-10">
                        <h2 className="text-2xl font-bold text-white drop-shadow-sm md:text-3xl">{member.name}</h2>
                        <p className="mt-1 text-lg font-semibold text-white/90">
                            {member.position}
                        </p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700"
                    >
                        <Mail className="h-4 w-4" />
                        {member.email}
                    </a>

                    {member.objective && (
                        <div className="mt-6">
                            <p className="sa-eyebrow mb-2">Objective</p>
                            <p className="font-medium leading-relaxed text-gray-800">{member.objective}</p>
                        </div>
                    )}

                    <div className="mt-6">
                        <p className="sa-eyebrow mb-2">Role Description</p>
                        <p className="leading-relaxed text-gray-700">{member.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamModal;
