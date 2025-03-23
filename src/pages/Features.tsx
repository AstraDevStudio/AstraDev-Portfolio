import SlidingText from '@/components/SlidingText';
import StackedCards from '@/components/StackedCards';
import StackProject from '@/components/StackProject';
import React, { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Features = () => {


    return (
        <div  className="h-[550vh] relative w-screen bg-black">
            <div className="absolute z-30 w-screen bg-black">
                <SlidingText word="Premium Projects" />
                <div className="m-auto text-white text-left mt-6 mb-32 w-[60rem]">
                    <h1 className="text-6xl text-left">Featured Works</h1>
                    <div className="flex flex-col mt-5 text-3xl text-white font-thin">
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
