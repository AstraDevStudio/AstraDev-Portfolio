import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import webdesign from '../assets/images/webdesign.jpg';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, text: "Website Design", color: "bg-violet-950/90" },
  { id: 2, text: "Card 2", color: "bg-blue-500/90" },
  { id: 3, text: "Card 3", color: "bg-green-500/90" },
  { id: 4, text: "Card 4", color: "bg-yellow-500/90" },
];

const StackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      ease: (t) => 1 - Math.pow(1 - t, 3), // Custom easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // GSAP Stacked Cards Animation
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 10%",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    cardsRef.current.forEach((card, index) => {
      const startY = index * 80;
      const endY = index * 10;

      t1.fromTo(
        card,
        { y: `${startY}%` },
        { y: `${endY}%`, duration: 1 },
        index * 0.5
      );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => { cardsRef.current[index] = el; }}
          className="absolute top-0 left-[7rem] w-[80rem] rounded-4xl shadow-md shadow-blue-100 h-[40rem] flex items-center justify-center text-4xl font-bold text-white bg-radial from-gray-400/30 from-30% to-purple-950/50 border-t backdrop-blur-2xl border-purple-400"
          style={{ zIndex: index }}
        >
          <div className="flex w-full h-full px-2 py-10 m-10 justify-center gap-[10rem]">
            <div className="flex flex-col w-[50%]">
              <h1 className="z-20 p-2 mx-5">WEB DESIGN</h1>
              <p className="text-[2rem] font-Josefin_Sans font-extralight p-2">
                It is a long established fact that a reader will be distracted by the readable content...
              </p>
            </div>
            <div className="w-[30rem] h-[30rem] bg-cover overflow-hidden rounded-md">
              <img src={webdesign} className="w-full h-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
