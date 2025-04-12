import SlidingText from '@/components/SlidingText'
import StackProject from '@/components/StackProject'
// import React from 'react'

const Projects = () => {
    return (
        <div data-scroll-section className='relative h-[570vh] md:w-screen w-[100vw] bg-gradient-to-b from-transparent md:mt-1 -mt-[10rem] to-black to-40%'>
            <div className='absolute z-30 w-screen'>
                <SlidingText word={"Premium Projects"} />
                <div className='m-auto text-white text-left mt-6 mb-32  md:w-[60rem] '>
                    <h1 className='md:text-6xl text-4xl md:text-left p-8 md:p-0 '>
                        Featured Works
                    </h1>
                    <div className="flex flex-col mt-5 md:text-3xl text-lg px-8 md:p-0 text-white  font-thin ">
                        <div>Beautiful designs. Eye-catching interactions. Memorable experiences.</div>
                        <div>Development that delivers. Let the work do the talking.</div>
                    </div>

                </div>
                <div className='w-screen h-screen'>
                    <StackProject />
                </div>
            </div>
        </div>
    )
}

export default Projects