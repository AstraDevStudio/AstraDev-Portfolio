import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    { id: 1, text: "Website Design", color: "bg-violet-950/90", video: "your-video-url1.mp4", tilt: 0 },
    { id: 2, text: "Card 2", color: "bg-blue-500/90", video: "your-video-url2.mp4", tilt: -5 },
    { id: 3, text: "Card 3", color: "bg-green-500/90", video: "your-video-url3.mp4", tilt: 5 },
];

const StackProject = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP ScrollTrigger with Lenis
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 5%",
                end: "bottom bottom",
                scrub: 1.5, // Reduce scrub to make transitions smoother
                pin: true,
                scroller: lenis.rootElement, // Sync Lenis with GSAP
            },
        });

        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            const startY = index * 60; // Reduce the distance for a smoother effect
            const endY = index * 15;

            t1.fromTo(
                card,
                { y: `${startY}%` },
                { y: `${endY}%` },
                index * 0.2 // Reduce stagger for faster animation
            );
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div ref={containerRef} className="h-[400vh] relative flex items-center justify-center">
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    ref={(el) => { (cardsRef.current[index] = el) }}
                    className={`absolute top-0 m-auto w-[60rem] h-[40rem] rounded-[2.5rem] 
                        shadow-[0px_20px_50px_rgba(0,0,0,0.3)] drop-shadow-[0px_10px_30px_rgba(0,0,0,0.2)]
                        flex items-center justify-center text-4xl font-bold text-white 
                        transition-all duration-300 cursor-pointer hover:shadow-[0px_25px_60px_rgba(0,0,0,0.4)]`}

                    style={{
                        zIndex: index,
                    }}                
                >
                    <div className="flex justify-center items-center min-h-screen p-8">
                        <div className="w-[60rem] rounded-2xl p-10 bg-gray-300">
                            <h1 className="text-4xl font-semibold text-gray-900">{card.text}</h1>

                            {/* Video Section */}
                            <div className="mt-6 w-full h-[30rem] rounded-lg overflow-hidden flex justify-center items-center">
                                <video className="w-full h-full object-cover" controls>
                                    <source src={card.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StackProject;
