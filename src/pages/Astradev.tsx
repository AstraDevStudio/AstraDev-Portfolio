import bg from '../assets/images/bg.png'
import bg2 from '../assets/images/iPhone 16 - bg.svg'
import { SparklesCore } from '@/components/ui/sparkles';
import { Typewriter } from '@/components/ui/typewriter-text';
import Navbar from "@/components/Navbar"
// import Projects from './Projects';
import Features from './Features';
// import Freelancer from '../assets/videos/Freelancer.mp4'

import { TestimonialsSectionDemo } from '../components/TestimonialSection';
import { HeroParallax } from '@/components/hero-parallax';
import freelanceastra from '../assets/images/freelanceastra.png'
import clairejane from '../assets/images/claire jane.png'
import bankhotel from '../assets/images/BankHotel.png'
import SlidingText from '@/components/SlidingText';
// import ProjectCards from '@/components/ProjectCards';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
// import { Input } from '@/components/ui/input';

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
          <div className=' h-auto w-full bg-[#08021E]  overflow-x-hidden '>
      <Navbar />
      <img src={bg} className='md:w-full hidden md:block absolute md:h-auto  md:inset-0 ' />
      <img src={bg2} className='md:w-full md:hidden h-[48rem] absolute md:inset-0 ' />
      <div className=" w-full bg-[#08021E] flex flex-col items-center justify-center overflow-hidden rounded-md">

        <div className="h-[40rem] relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.8}
              particleDensity={80}
              className="w-screen h-screen"
              particleColor="#FFFFFF"
              speed={1}
            />
          </div>
          <div className='flex flex-col md:top-[4rem] top-[1rem] relative '>
            <div className='md:text-[2rem] text-[0.8rem] md:top-[0.2rem] top-0 font-bold font-Josefin_Sans text-white md:left-[9rem] left-[2rem] absolute ' >WEB DESIGN + WEB STUDIO</div>
            <h1 className="md:text-[12rem] text-[3.2rem] top-[2rem] md:top-[1rem] left-0 md:inset-0 font-Rammetto-One font-bold text-center text-white relative z-20 uppercase">
              Astradev
            </h1>
          </div>
          <div className='md:top-[33rem] top-[27rem] absolute'>
            <Typewriter
              text={["Build  .  Develop   .   Deploy", "Build  .  Develop   .   Deploy", "Build  .  Develop   .   Deploy"]}
              speed={50}
              loop={true}
              className="md:text-4xl text-2xl font-semibold font-Josefin_Sans text-white"
            />
          </div>
        </div>

      </div>
      {/* <Projects /> */}
      <SlidingText word={"Premium Projects"} />
               
      <HeroParallax products={products}/>
      {/* <div className='w-full  h-[40rem] md:hidden z-40 mt-24 relative '>
           <ProjectCards/>
      </div> */}
      <Features />
      <TestimonialsSectionDemo/>
      
    </div>
    
    <footer className='flex flex-col items-center justify-center pb-[5rem] pt-[1rem] bg-black'>
      <div className='flex md:flex-row p-2 md:w-[60%] gap-1.5   md:rounded-full w-full  md:justify-center justify-center items-center '>
        <input className=' bg-gradient-to-t from-[#5a4998] to-white md:rounded-4xl rounded-xs md:w-[80%] w-[80%] p-4.5 '  placeholder='Enter Email'></input>
        <InteractiveHoverButton text='Contact Us' className='rounded-xs md:rounded-full py-4.5'/>
      </div>
      <h1 className="md:text-[12rem] text-[3.2rem] top-[2rem] md:top-[1rem] left-0 md:inset-0 font-Rammetto-One font-bold text-center text-white relative z-20 uppercase">
              Astradev
      </h1>
      <div className='flex justify-between w-[20rem] md:w-full mt-[1rem] '>
          <div className='w-[30%] md:w-full md:text-2xl text-md font-Josefin_Sans text-gray-400  mt-[2rem]  flex flex-col justify-center items-center'>
                <p>Work</p>
                <p>Services</p>
                <p>About Us</p>
          </div>
          <div className=' md:text-2xl text-wrap text-md font-Josefin_Sans w-[60%] mt-[2rem] text-gray-400 flex flex-col justify-center items-center'>
                <p>Instagram</p>
                <p>Twitter</p>
                <p className='flex-wrap flex text-wrap'>astradevsstudio@gmail.com</p>
          </div>
      </div>
 
    </footer>
</>

  )
}

export default Astradev 