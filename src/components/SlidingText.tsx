import { useEffect, useRef } from "react";
import gsap from "gsap";

const SlidingText = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    // Get the width of the word
    const wordWidth = carousel.querySelector(".carousel-word").offsetWidth;

    // Duplicate the word to create a seamless loop
    carousel.innerHTML += carousel.innerHTML;

    // Animate the carousel
    gsap.fromTo(
      carousel,
      { x: 0 }, // Start from the initial position
      {
        x: -wordWidth, // Move the carousel left by the width of the word
        duration: 10, // Adjust the duration for speed
        repeat: -1, // Infinite loop
        ease: "none", // Linear animation
      }
    );
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-900">
      <div ref={carouselRef} className="inline-block">
        <span className="carousel-word text-[20rem] font-bold text-white tracking-[2rem]">
          SERVICES • SERVICES • SERVICES •
        </span>
      </div>
    </div>
  );
};

export default SlidingText;