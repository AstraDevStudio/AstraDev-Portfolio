import SlidingText from '@/components/SlidingText';
import StackedCards from '@/components/StackedCards';
// import StackProject from '@/components/StackProject';
// import React, { useEffect } from 'react';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Features = () => {


    return (
        <div  className="h-[550vh] relative w-screen bg-black md:mt-1 -mt-[50rem]">
            <div className="absolute z-30 w-screen bg-black">
                <SlidingText word="Premium Projects" />
                <div className="m-auto text-white text-left mt-6 mb-32 md:w-[60rem] flex flex-col ">
                    <h1 className="md:text-6xl text-4xl md:text-left p-8 md:p-0">Featured Works</h1>
                    <div className="flex flex-col mt-5 md:text-3xl text-lg px-8 md:p-0 text-white  font-thin">
                        <div>Beautiful designs. Eye-catching interactions. Memorable experiences.</div>
                        <div>Development that delivers. Let the work do the talking.</div>
                    </div>
                </div>
                <div className="w-screen h-screen">
                    <StackedCards />
                </div>
            </div>
        </div>
    );
};

export default Features;
