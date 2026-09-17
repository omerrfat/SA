import React, { useRef } from 'react';
import { gsap } from '../lib/gsap';
import type { TeamMember } from '../types/team';

interface TeamFilmstripProps {
    members: TeamMember[];
    onOpen: (member: TeamMember) => void;
}

const REST_SHADOW = '0 1px 2px rgba(76,29,149,0.08), 0 10px 24px -14px rgba(76,29,149,0.4)';
const LIFT_SHADOW = '0 30px 60px -15px rgba(76,29,149,0.5), 0 18px 32px -12px rgba(0,0,0,0.3)';

/** A row of photo cards that lift above their neighbours on hover/focus, GSAP-driven for a natural spring feel. */
const TeamFilmstrip: React.FC<TeamFilmstripProps> = ({ members, onOpen }) => {
    const imgRefs = useRef<Record<string, HTMLImageElement | null>>({});

    const handleEnter = (e: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>) => {
        const card = e.currentTarget;
        const name = card.dataset.name!;
        gsap.to(card, {
            y: -22,
            scale: 1.07,
            zIndex: 20,
            boxShadow: LIFT_SHADOW,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
        });
        gsap.to(imgRefs.current[name], { scale: 1.1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
    };

    const handleLeave = (e: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>) => {
        const card = e.currentTarget;
        const name = card.dataset.name!;
        gsap.to(card, {
            y: 0,
            scale: 1,
            zIndex: 1,
            boxShadow: REST_SHADOW,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
        });
        gsap.to(imgRefs.current[name], { scale: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 py-2 sm:gap-6">
            {members.map((member) => (
                <button
                    key={member.name}
                    type="button"
                    data-name={member.name}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                    onFocus={handleEnter}
                    onBlur={handleLeave}
                    onClick={() => onOpen(member)}
                    className="team-card relative w-[150px] shrink-0 overflow-hidden rounded-2xl bg-gray-900 text-left outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 sm:w-[190px]"
                    style={{ aspectRatio: '3 / 4', boxShadow: REST_SHADOW }}
                >
                    <img
                        ref={(el) => { imgRefs.current[member.name] = el; }}
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: member.imagePosition ?? 'center' }}
                    />
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${member.color}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                        <p className="text-sm font-bold leading-tight text-white sm:text-base">{member.name}</p>
                        <p className="mt-0.5 text-xs text-white/75 sm:text-sm">{member.position}</p>
                        <p className="mt-1 truncate text-[10px] text-white/50">{member.email}</p>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default TeamFilmstrip;
