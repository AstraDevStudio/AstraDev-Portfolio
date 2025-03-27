import bg from '../assets/images/bg.png'
import { SparklesCore } from '@/components/ui/sparkles';
import { Typewriter } from '@/components/ui/typewriter-text';
import Navbar from "@/components/Navbar"
import Projects from './Projects';
import Features from './Features';
import { TestimonialsSectionDemo } from '../components/TestimonialSection';


const Astradev = () => {
  return (
    <div className=' h-auto w-full bg-[#08021E]  overflow-x-hidden '>
      <Navbar />
      <img src={bg} className='md:w-full absolute md:h-auto h-[40rem] md:inset-0 ' />
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
          <div className='flex flex-col'>
            <div className='md:text-[2rem] text-[0.8rem] top-[15rem] font-bold font-Josefin_Sans text-white md:left-[9rem] left-[2rem] absolute ' >WEB DESIGN + WEB STUDIO</div>
            <h1 className="md:text-[12rem] text-[3.5rem] left-0 md:inset-0 font-Rammetto-One font-bold text-center text-white relative z-20 uppercase">
              Astradev
            </h1>
          </div>
          <div className='md:top-[30rem] top-[25rem] absolute'>
            <Typewriter
              text={["Build  .  Develop   .   Deploy", "Build  .  Develop   .   Deploy", "Build  .  Develop   .   Deploy"]}
              speed={50}
              loop={true}
              className="md:text-4xl text-2xl font-semibold font-Josefin_Sans text-white"
            />
          </div>
        </div>

      </div>
      <Projects />
      <Features />
      <TestimonialsSectionDemo/>

    </div>

  )
}

export default Astradev 