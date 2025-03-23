import SlidingText from '@/components/SlidingText'
import StackProject from '@/components/StackProject'
import React from 'react'

const Projects = () => {
    return (
        <div data-scroll-section className='relative h-[570vh] w-screen bg-black'>
            <div className='absolute z-30 w-screen'>
                <SlidingText word={"Premium Projects"} />
                <div className='m-auto text-white text-left mt-6 mb-32  w-[60rem] '>
                    <h1 className='text-6xl text-left '>
                        Featured Works
                    </h1>
                    <div className="flex flex-col mt-5 text-3xl text-white  font-thin ">
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