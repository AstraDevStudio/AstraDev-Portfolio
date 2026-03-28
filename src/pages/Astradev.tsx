import bg from '../assets/images/bg.png'
import bg2 from '../assets/images/iPhone 16 - bg.svg'
import { SparklesCore } from '@/components/ui/sparkles';
import { Typewriter } from '@/components/ui/typewriter-text';
import Navbar from "@/components/Navbar"
import Features from './Features';

import { TestimonialsSectionDemo } from '../components/TestimonialSection';
import { HeroParallax } from '@/components/hero-parallax';
import freelanceastra from '../assets/images/freelanceastra.png'
import clairejane from '../assets/images/claire jane.png'
import bankhotel from '../assets/images/BankHotel.png'
import SlidingText from '@/components/SlidingText';
import WhyChooseUs from '@/components/WhyChooseUs';
import TechStack from '@/components/TechStack';
import CTASection from '@/components/CTASection';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

export const products = [
  {
    title: "Claire Jane",
    link: "https://clairejane.netlify.app/", 
    thumbnail:
      clairejane,
  },
  {
    title: "Freelanceastra",
    link: "https://freelanceastra.netlify.app/",
    thumbnail:
     freelanceastra,
  },
  {
    title: "hotelbank",
    link: "https://hotelbank.netlify.app/",
    thumbnail:
      bankhotel,
  },

  {
    title: "Claire Jane",
    link: "https://clairejane.netlify.app/", 
    thumbnail:
      clairejane,
  },
  {
    title: "Freelanceastra",
    link: "https://freelanceastra.netlify.app/",
    thumbnail:
     freelanceastra,
  },
  {
    title: "hotelbank",
    link: "https://hotelbank.netlify.app/",
    thumbnail:
      bankhotel,
  },

  {
    title: "Claire Jane",
    link: "https://clairejane.netlify.app/", 
    thumbnail:
      clairejane,
  },
  {
    title: "Freelanceastra",
    link: "https://freelanceastra.netlify.app/",
    thumbnail:
     freelanceastra,
  },
  {
    title: "hotelbank",
    link: "https://hotelbank.netlify.app/",
    thumbnail:
      bankhotel,
  }];
const Astradev = () => {
  return (
    <>
      <div className='h-auto w-full bg-[#08021E] overflow-x-hidden'>
        <Navbar />

        {/* Hero Section */}
        <header className="relative w-full h-screen overflow-hidden" role="banner">
          <img src={bg} className='md:w-full hidden md:block absolute md:h-auto md:inset-0 pointer-events-none' alt="" aria-hidden="true" />
          <img src={bg2} className='md:w-full md:hidden h-[48rem] absolute md:inset-0 pointer-events-none' alt="" aria-hidden="true" />
          <div className="w-full absolute inset-0 h-screen" aria-hidden="true">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.8}
              particleDensity={80}
              className="w-full h-full"
              particleColor="#FFFFFF"
              speed={1}
            />
          </div>
          <div className='absolute inset-0 flex flex-col items-center justify-center z-20'>
            <div className='flex flex-col relative'>
              <p className='md:text-[2rem] text-[0.8rem] font-bold font-Josefin_Sans text-white md:left-[9rem] left-[2rem] absolute md:top-[0.2rem] top-0'>WEB DESIGN + WEB STUDIO</p>
              <h1 className="md:text-[12rem] pt-10 text-[3.2rem] mt-[2rem] md:mt-[1rem] font-Rammetto-One font-bold text-center text-white uppercase leading-none">
                Astradev
              </h1>
            </div>
            <div className='mt-8'>
              <Typewriter
                text={["Build  .  Develop   .   Deploy", "Build  .  Develop   .   Deploy", "Build  .  Develop   .   Deploy"]}
                speed={50}
                loop={true}
                className="md:text-4xl text-2xl font-semibold font-Josefin_Sans text-white"
              />
            </div>
          </div>
        </header>

        <SlidingText word={"Premium Projects"} />

        <HeroParallax products={products}/>

        <WhyChooseUs />
        <TechStack />

        <Features />
        <TestimonialsSectionDemo/>
        <CTASection />

        <footer className='flex flex-col items-center justify-center pb-12 pt-16 bg-black border-t border-white/5' role="contentinfo">
          <div className='flex md:flex-row p-2 md:w-[60%] gap-1.5 md:rounded-full w-[95%] md:justify-center justify-center items-center'>
            <input
              className='bg-gradient-to-t from-[#5a4998] to-[#2a1f5e] text-white placeholder-white/60 md:rounded-4xl rounded-lg md:w-[80%] w-[80%] p-4.5 outline-none border border-purple-500/30'
              placeholder='Enter your email'
              aria-label="Email address"
            />
            <InteractiveHoverButton text='Contact Us' className='rounded-lg md:rounded-full py-4.5 border-purple-500/50 text-white'/>
          </div>
          <h2 className="md:text-[10rem] text-[3rem] mt-12 font-Rammetto-One font-bold text-center text-white uppercase leading-none">
            Astradev
          </h2>
          <p className="text-gray-500 font-Josefin_Sans mt-4 text-center text-sm md:text-base max-w-md px-4">
            Premium web design & development studio. We turn ideas into digital experiences.
          </p>
          <div className='flex justify-center gap-16 md:gap-32 w-full mt-8'>
            <nav className='md:text-2xl text-md font-Josefin_Sans text-gray-400 flex flex-col items-center gap-2' aria-label="Footer navigation">
              <a href="#work" className="hover:text-white transition cursor-pointer">Work</a>
              <a href="#services" className="hover:text-white transition cursor-pointer">Services</a>
              <a href="#about" className="hover:text-white transition cursor-pointer">About Us</a>
            </nav>
            <div className='md:text-2xl text-md font-Josefin_Sans text-gray-400 flex flex-col items-center gap-2'>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition cursor-pointer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition cursor-pointer">Twitter</a>
              <a href="mailto:astradevsstudio@gmail.com" className="hover:text-white transition cursor-pointer break-all">astradevsstudio@gmail.com</a>
            </div>
          </div>
          <div className="mt-12 text-gray-600 font-Josefin_Sans text-sm">
            © {new Date().getFullYear()} Astradev Studios. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}

export default Astradev 