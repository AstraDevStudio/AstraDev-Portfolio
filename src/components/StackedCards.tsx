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
      // Start each card slightly below the previous one
      const startY = index * 80; // Adjust this value to control the initial spacing
      const endY = index * 10; // Adjust this value to control the final stacked spacing

      t1.fromTo(
        card,
        { y: `${startY}%` }, // Start position
        { y: `${endY}%`, duration: 1 }, // End position
        index * 0.5 // Stagger the animation for each card
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => {(cardsRef.current[index] = el)}}
          className={`absolute top-0 left-[7rem] w-[80rem] rounded-4xl shadow-xl shadow-gray-900 h-[40rem] flex items-center justify-center text-4xl font-bold text-white ${card.color}`}
          style={{ zIndex: index }} // Ensure cards stack correctly
        >
          {card.text}
        </div>
      ))}
    </div>
  );
};

export default StackedCards;