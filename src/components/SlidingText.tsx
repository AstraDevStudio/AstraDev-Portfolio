import { useEffect, useRef } from "react";
import gsap from "gsap";

const SlidingText = ({word}:{word:string}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if(carousel){
    // Get the width of the word
    const wordElement = carousel.querySelector(".carousel-word") as HTMLElement;
    if (wordElement) {
          const wordWidth = wordElement.offsetWidth;
        
        // Duplicate the word to create a seamless loop
        carousel.innerHTML += carousel.innerHTML;

        // Animate the carousel
        gsap.fromTo(
          carousel,
          { x: 0 }, // Start from the initial position
          {
            x: -wordWidth, // Move the carousel left by the width of the word
            duration: 30, // Adjust the duration for speed
            repeat: -1, // Infinite loop
            ease: "none", // Linear animation
          }
        );
        }
    }
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap ">
      <div ref={carouselRef} className="inline-block">
        <span className="carousel-word md:text-[20rem] text-[10rem] font-bold text-white tracking-[2rem] uppercase">
        {word} • {word} • {word} •
        </span>
      </div>
    </div>
  );
};

export default SlidingText;