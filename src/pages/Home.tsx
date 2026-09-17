import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, UserCheck, Briefcase, ArrowRight, Ticket } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import TextCursorProximity from '../components/TextCursorProximity';
import Reveal from '../components/Reveal';
import { gsap, useGSAP } from '../lib/gsap';

const Home = () => {
    const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    const campusImages = [
        '/campus.jpg',
        '/campus3.jpg',
        '/campus2.jpg',
    ];

    const features = [
        {
            title: 'Nott-a-Shop',
            description: 'Browse thrift items, club merchandise, and official University of Nottingham gear in our sustainable campus store.',
            icon: ShoppingBag,
            link: '/shop',
            color: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Event Tickets',
            description: 'Register for exciting events organized by clubs and societies across campus.',
            icon: Ticket,
            link: '/tickets',
            color: 'from-blue-500 to-blue-600',
        },
        {
            title: 'Club Registration',
            description: 'Join clubs and societies, discover new communities, and register for activities that match your interests.',
            icon: UserCheck,
            link: '/registration',
            color: 'from-yellow-400 to-yellow-500',
        },
        {
            title: 'Student Jobs',
            description: 'Find part-time job opportunities, work-study positions, and earn money while studying at university.',
            icon: Briefcase,
            link: '/jobs',
            color: 'from-purple-600 to-indigo-600',
        },
    ];

    // Auto-advance the active hero image.
    useEffect(() => {
        const bgTimer = setInterval(() => {
            setCurrentBgImageIndex((prev) => (prev + 1) % campusImages.length);
        }, 5000);
        return () => clearInterval(bgTimer);
    }, [campusImages.length]);

    // Crossfade between hero images (no zoom loop, just a clean opacity fade).
    useGSAP(
        () => {
            imageRefs.current.forEach((img, index) => {
                if (!img) return;
                gsap.to(img, {
                    autoAlpha: index === currentBgImageIndex ? 1 : 0,
                    duration: 1.4,
                    ease: 'power2.inOut',
                });
            });
        },
        { dependencies: [currentBgImageIndex], scope: heroRef }
    );

    // Subtle scroll parallax on the hero imagery.
    useGSAP(
        () => {
            if (!parallaxRef.current || !heroRef.current) return;
            const mm = gsap.matchMedia();
            mm.add('(prefers-reduced-motion: no-preference)', () => {
                gsap.to(parallaxRef.current, {
                    yPercent: 14,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                });
            });
            return () => mm.revert();
        },
        { scope: heroRef }
    );

    // One-time entrance for the hero copy.
    useGSAP(
        () => {
            gsap.fromTo(
                '.hero-fade-item',
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.2 }
            );
        },
        { scope: heroRef }
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative -mt-16 h-screen min-h-[640px] flex items-end overflow-hidden bg-purple-950">
                {/* Background Images */}
                <div ref={parallaxRef} className="absolute -top-[8%] inset-x-0 h-[116%] z-0">
                    {campusImages.map((image, index) => (
                        <img
                            key={image}
                            ref={(el) => { imageRefs.current[index] = el; }}
                            src={image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ opacity: index === 0 ? 1 : 0 }}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full pb-20 pt-32 md:pb-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="hero-fade-item text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-3xl">
                            <TextCursorProximity
                                label="Welcome to the"
                                containerRef={heroRef}
                                radius={150}
                                falloff="gaussian"
                                styles={{
                                    color: { from: '#FFF', to: '#FFD700' },
                                    textShadow: { from: '0 0 0px rgba(255,255,255,0)', to: '0 0 15px rgba(255, 215, 0, 0.8)' },
                                }}
                            />{' '}
                            <span className="block">
                                <TextCursorProximity
                                    label="Students' Association"
                                    containerRef={heroRef}
                                    radius={150}
                                    falloff="gaussian"
                                    styles={{
                                        color: { from: '#FFF', to: '#FFD700' },
                                        textShadow: { from: '0 0 0px rgba(255,255,255,0)', to: '0 0 15px rgba(255, 215, 0, 0.8)' },
                                    }}
                                />
                            </span>
                        </h1>
                        <p className="hero-fade-item mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
                            Your one-stop destination for thrift shopping, event tickets, club registration, and student job opportunities.
                        </p>
                        <div className="hero-fade-item mt-9 flex flex-col sm:flex-row gap-4">
                            <Link to="/shop" className="sa-btn-primary bg-yellow-400 text-purple-900 hover:bg-yellow-300 shadow-lg">
                                <ShoppingBag className="w-4 h-4" />
                                <span>Explore Shop</span>
                            </Link>
                            <Link to="/registration" className="sa-btn-outline border-white text-white hover:bg-white hover:text-purple-900">
                                <UserCheck className="w-4 h-4" />
                                <span>Join Clubs</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Corner caption, echoing an editorial photo credit */}
                <div className="hero-fade-item absolute bottom-8 left-4 sm:left-6 lg:left-8 z-20 hidden sm:block">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                        University of Nottingham · Malaysia
                    </p>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {campusImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBgImageIndex(index)}
                            className={`h-[3px] rounded-full transition-all duration-300 ${index === currentBgImageIndex ? 'bg-white w-8' : 'bg-white/40 w-4 hover:bg-white/60'
                                }`}
                            aria-label={`Go to campus image ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="pt-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Reveal>
                            <p className="sa-eyebrow mb-3">What we offer</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Everything You Need in One Place
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From thrift shopping and event tickets to club registration and job opportunities, we've got you covered.
                            </p>
                        </Reveal>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto -mt-16 px-4 sm:px-6 lg:px-8">
                    <ScrollStack useWindowScroll={true} itemDistance={32} itemStackDistance={15} itemScale={0.05} baseScale={0.8} blurAmount={2}>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <ScrollStackItem key={index} itemClassName="bg-white !h-auto !my-0 !p-0 !rounded-3xl !border !border-purple-900/5 !shadow-[0_1px_2px_rgba(76,29,149,0.06),0_20px_45px_-20px_rgba(76,29,149,0.35)] group">
                                    <div className={`h-1.5 bg-gradient-to-r ${feature.color}`}></div>
                                    <div className="p-8">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                                        <Link
                                            to={feature.link}
                                            className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 group-hover:translate-x-1 transition-all duration-200"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </ScrollStackItem>
                            );
                        })}
                    </ScrollStack>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-yellow-400 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-purple-800 mb-8 max-w-2xl mx-auto">
                            Join thousands of students who are already making the most of their university experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/registration" className="sa-btn-primary">
                                Register for Clubs
                            </Link>
                            <Link to="/jobs" className="sa-btn-outline">
                                Find Jobs
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
