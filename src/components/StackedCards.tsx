import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, text: "Card 1", color: "bg-red-500" },
  { id: 2, text: "Card 2", color: "bg-blue-500" },
  { id: 3, text: "Card 3", color: "bg-green-500" },
  { id: 4, text: "Card 4", color: "bg-yellow-500" },
];

const StackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
      },
    });

    cardsRef.current.forEach((card, index) => {
      timeline.fromTo(
        card,
        { y: "40%", opacity: 0 },
        { y: "-10%", opacity: 10, duration: 1 },
        index * 1 // Delays each card animation slightly
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="h-[400vh] relative">
    
     {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => {(cardsRef.current[index] = el)}}
          className={`absolute top-0 left-[7rem]  w-[85%] rounded-4xl shadow-xl shadow-gray-900 h-[40rem] flex items-center justify-center text-4xl font-bold text-white ${card.color}`}
          style={{ zIndex: index }}
        >
          {card.text}
        </div>
      ))}

    </div>
  );
};

export default StackedCards;
