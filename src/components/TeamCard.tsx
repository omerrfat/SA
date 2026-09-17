import React, { useRef } from 'react';
import { Mail } from 'lucide-react';
import { gsap } from '../lib/gsap';
import type { TeamMember } from '../types/team';

interface TeamCardProps {
    member: TeamMember;
    onOpen?: (member: TeamMember) => void;
    /** Small line shown under the position on the card face (kept short). */
    active?: boolean;
    className?: string;
}

const REST_SHADOW = '0 1px 2px rgba(76,29,149,0.08), 0 10px 24px -14px rgba(76,29,149,0.4)';
const LIFT_SHADOW = '0 30px 60px -15px rgba(76,29,149,0.5), 0 18px 32px -12px rgba(0,0,0,0.3)';

const TeamCard: React.FC<TeamCardProps> = ({ member, onOpen, active, className = '' }) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const handleEnter = (e: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>) => {
        gsap.to(e.currentTarget, {
            y: -22,
            scale: 1.07,
            zIndex: 20,
            boxShadow: LIFT_SHADOW,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
        });
        gsap.to(imgRef.current, { scale: 1.1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
    };

    const handleLeave = (e: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>) => {
        gsap.to(e.currentTarget, {
            y: 0,
            scale: 1,
            zIndex: 1,
            boxShadow: REST_SHADOW,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
        });
        gsap.to(imgRef.current, { scale: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
    };

    return (
        <button
            type="button"
            onClick={() => onOpen?.(member)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onFocus={handleEnter}
            onBlur={handleLeave}
            style={{ boxShadow: REST_SHADOW }}
            className={`team-card group relative block w-full overflow-hidden rounded-3xl border border-purple-900/5 bg-white text-left outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${active ? 'ring-2 ring-purple-500 ring-offset-2' : ''} ${className}`}
        >
            <div className="relative h-72 w-full overflow-hidden bg-gray-200">
                <img
                    ref={imgRef}
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: member.imagePosition ?? 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${member.color}`} />
                <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-lg font-bold leading-tight text-white drop-shadow-sm">{member.name}</p>
                    <p className="mt-1 text-sm font-medium text-white/80">{member.position}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 text-xs font-medium text-gray-500 transition-colors group-hover:text-purple-600">
                <Mail className="h-3.5 w-3.5" />
                <span className="truncate">{member.email}</span>
            </div>
        </button>
    );
};

export default TeamCard;
