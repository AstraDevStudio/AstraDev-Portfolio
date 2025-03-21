import bg from '../assets/images/bg.png'
import { SparklesCore } from '@/components/ui/sparkles';
import { Typewriter } from '@/components/ui/typewriter-text';
import Navbar from "@/components/Navbar"
import SlidingText from '@/components/SlidingText';
import StackedCards from '@/components/StackedCards';


const Astradev = () => {
  return (
    <div className=' h-auto w-full bg-[#08021E] '>
        <Navbar />
      <img src={bg} className='w-full absolute' />
      <div className="h-[45rem] w-full bg-[#08021E] flex flex-col items-center justify-center overflow-hidden rounded-md">

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
          <div className='text-[2rem] font-bold font-Josefin_Sans text-white left-[9rem] absolute ' >WEB DESIGN + WEB STUDIO</div>
            <h1 className="text-[12rem] font-Rammetto-One font-bold text-center text-white relative z-20 uppercase">
             Astradev
            </h1>
        </div>
          <div className='top-[30rem] absolute'>
            <Typewriter
              text={["Build  .  Develop   .   Deploy", "Build  .  Develop   .   Deploy", "Build  .  Develop   .   Deploy"]}
              speed={50}
              loop={true}
              className="text-4xl font-semibold font-Josefin_Sans text-white"
            />
          </div>
        </div>

      </div>
    {/* what we do */}
    <div className='absolute z-50 w-full bg-linear-to-t from-[#010003]  to bg-transparent  h-[60rem] '>
        <SlidingText/>
        <div className='w-screen h-screen'>
        <StackedCards/>
        </div>
    </div>

    </div>
  
  )
}

export default Astradev 