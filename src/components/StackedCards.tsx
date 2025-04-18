import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import webdesign from '../assets/images/web design.avif';
import webapp from '../assets/images/webapp.avif';
import automation from '../assets/images/web automation.avif';
import androidApp from '../assets/images/android app.avif';

gsap.registerPlugin(ScrollTrigger);

const cardDetails = [
  {
    title: "Web Design",
    details: (
      <>
        <p>
          We create visually stunning, responsive websites with modern UI/UX. From clean layouts to intuitive navigation, we bring your ideas to life with design that’s user-focused, brand-aligned, and fully optimized.
        </p>
      </>
    ),
    image:webdesign
  },
  {
    title: "Web Applications",
    details: (
      <>
        <p>
          We develop scalable web apps using React, Node.js, and MongoDB. From dashboards to dynamic platforms, we deliver secure, fast, and tailored solutions to streamline workflows and enhance user experiences.
        </p>
      </>
    ),
    image:webapp
  },
  {
    title: "Android Applications",
    details: (
      <>
        <p>
          We build sleek, functional Android apps using Kotlin and Java. Our focus: fast performance, intuitive interfaces, and reliability — perfect for startups, businesses, or internal tools on any device.
        </p>
      </>
    ),
    image:androidApp
  },
  {
    title: "Automation Solutions",
    details: (
      <>
        <p>
          Automate tasks and boost efficiency with Python, Selenium, and cron jobs. From social posts to data handling, our tools save time, minimize errors, and simplify your repetitive digital processes.
        </p>
      </>
    ),
    image:automation
  },
];




const StackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
          
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      ease: (t:number) => 1 - Math.pow(1 - t, 3), // Custom easing
      smoothTouch: false
    }as any);

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // GSAP Stacked Cards Animation
    if (!containerRef.current || cardsRef.current.some(c => c === null)) return;

    const screenWidth = window.innerWidth;
    const startValue = screenWidth < 768 ? "top top" : "top 10%";
    const endValue = screenWidth < 768 ? "+=2500" : "bottom bottom";
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
        markers:false,
        anticipatePin: 1
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
    ScrollTrigger.normalizeScroll(true)
    ScrollTrigger.refresh();
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className=" relative md:w-full   ">
        <div className="min-h-[250vh] md:h-[400vh] relative">
        {cardDetails.map((card, index) => (
        <div
          key={index}
          ref={(el) => { cardsRef.current[index] = el; }}
          className="absolute top-0 md:left-[7rem] left-[1rem] h-[30rem] md:w-[80rem] w-[22rem] rounded-4xl  md:h-[40rem]  flex items-center justify-center text-4xl font-bold text-white bg-radial from-gray-500/20 from-30% to-purple-950/50 shadow-md  shadow-gray-800 backdrop-blur-2xl "
          style={{ zIndex: index }}
        >
          <div className="flex md:flex-row flex-col  md:w-full h-full px-2 py-10 m-10 justify-center md:gap-[10rem]">
            <div className="flex flex-col w-[100%] md:w-[50%]">
              <h1 className="z-20 p-2 mx-5 md:text-[3rem] text-[1.8rem]">{card.title}</h1>
              <p className="md:text-[2rem] text-[1.2rem] font-Josefin_Sans font-extralight p-2">
                {card.details}
              </p>
            </div>
            <div className="md:w-[30rem] md:h-[30rem] bg-cover overflow-hidden rounded-md">
              <img src={card.image} className="md:w-full md:h-full" />
            </div>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default StackedCards;
