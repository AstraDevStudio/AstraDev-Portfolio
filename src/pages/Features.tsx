import SlidingText from '@/components/SlidingText';
import StackedCards from '@/components/StackedCards';
// import StackProject from '@/components/StackProject';
// import React, { useEffect } from 'react';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Features = () => {


    return (
        <div className="relative w-full bg-black pt-12">
            <div className="relative z-30 w-full bg-black">
                <SlidingText word="What We Do" />
                <div className="mx-auto text-white text-left mt-6 mb-16 md:w-[60rem] flex flex-col px-8 md:px-0">
                    <h2 className="md:text-6xl text-4xl">Our Services</h2>
                    <div className="flex flex-col mt-5 md:text-3xl text-lg text-white font-thin">
                        <p>Beautiful designs. Eye-catching interactions. Memorable experiences.</p>
                        <p>Development that delivers. Let the work do the talking.</p>
                    </div>
                </div>
                <div className="w-full min-h-screen">
                    <StackedCards />
                </div>
            </div>
        </div>
    );
};

export default Features;
