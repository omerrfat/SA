export interface TeamMember {
    name: string;
    position: string;
    email: string;
    image: string;
    /** Tailwind gradient stops, e.g. "from-purple-600 to-purple-800" */
    color: string;
    description: string;
    /** Council members only */
    objective?: string;
    /** CSS object-position override for portrait framing */
    imagePosition?: string;
}
