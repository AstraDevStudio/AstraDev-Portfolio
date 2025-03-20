import React from 'react';
import bg from '../assets/images/bg.png'
import IntroBox from '../components/IntroBox';
import { SparklesCore } from '@/components/ui/sparkles';
import { Typewriter } from '@/components/ui/typewriter-text';
import WebgiViewer from '@/components/WebgiViewer';
import { Timeline } from '@/components/ui/timeline';
import { TimelineDemo } from '@/components/Things_we_do';

const Astradev = () => {
  return (
    <div className=' h-auto w-full bg-[#08021E] '>
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
              className="w-full h-[60rem]"
              particleColor="#FFFFFF"
              speed={1}
            />
          </div>
          <h1 className="md:text-7xl top-[5rem] text-3xl lg:text-6xl font-Josefin_Sans font-bold text-center text-white relative z-20">
            Welcome To Astradev
          </h1>
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

      <div className='absolute top-[40rem] flex justify-evenly gap-5  w-full h-[90rem]'>
        <div className='w-1/2'>
        <TimelineDemo/>
        </div>

        <div className='w-1/2' >
        <IntroBox />
        </div>
      </div>
      <div id='start-trigger'/>
      <div className='h-[50rem]  w-full relative z-50 border flex justify-center items-center top-[60rem]' >
      <WebgiViewer/>
      </div>
    </div>
  
  )
}

export default Astradev