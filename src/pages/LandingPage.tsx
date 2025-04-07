import React from 'react'
import noise from "../assets/Noise.svg"
import topCardGlow from '../assets/top-card-glow-3.svg'
import cardcolor from '../assets/card-color.svg'
import HeroSection from '../assets/images/HeroSection (1).svg'
import Navbar from '@/components/Navbar'
import Ellipse from '../assets/images/Ellipse 669.svg'
import curvedGradient from '../assets/images/curvedGradient.svg'
import buttonBook from '../assets/icons/button book icon.svg'
import Book1 from '../assets/images/book1.svg'
import Book2 from '../assets/images/book2.svg'
import Book3 from '../assets/images/book3.svg'
import Book4 from '../assets/images/book4.svg'
import Book5 from '../assets/images/book5.svg'
import Book6 from '../assets/images/book6.svg'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TestimonialCarousel } from '@/components/ui/testimonial'
// import { TestimonialsSection } from '../components/ui/'
import { TestimonialCarouselDemo } from '@/components/testimonials'
import Footer from '@/components/Footer'
const LandingPage = () => {
    // console.log("landing page rendered");
  return (
    <>
       <div className="">
        
        <Navbar/>
        <img src={topCardGlow} className='absolute '/>
        <img src={HeroSection} className='w-full h-[70rem] absolute -top-[10rem] z-50'/>
        <img src={noise} className='w-full h-full opacity-50'/>
        <img src={noise} className='w-full h-full opacity-50'/>
        {/* <div className='bg-[#05451e] w-[50rem] h-[10rem] z-30] rounded-full absolute -left-[10rem]'/> */}
        {/* <img src={topCardGlow} /> */}
        <img src={Ellipse} className='absolute w-full top-[14rem]' />
        <img src={curvedGradient} className='absolute w-full top-[10rem]'/>
        
        <div className=' absolute text-white top-[40rem] z-50 w-full h-[10rem] '>
              <div className='flex-col flex  items-center '>
                <h1 className='text-[3rem] font-Josefin_Sans font-semibold'>ORGANIZE TRACK DISCOVER</h1>
                <p className='text-2xl font-Josefin_Sans'>Welcome to BiblyVault-Your All-In-One Solution</p>
              </div>
        </div>

        {/* about */}
        <div className=' absolute text-white top-[50rem] z-50 w-full  px-[10rem] py-[2rem] font-Josefin_Sans flex flex-col items-center' >
           <div className=' flex  flex-col justify-center items-center '>
              <h1 className='text-[3rem] '>About Speak Logic</h1>
              <p>Lorem ipsum dolor sit amet, et enim tantas senserit his. No est utroque copiosae voluptatum, ad posse vituperatoribus eam, ex mel sint viris aliquam. An eos aliquip eloquentiam, tritani fabellas mea eu. Fugit consequat conclusionemque vix id, nec ea denique delicatissimi. Usu labore voluptatum in. Erat voluptua mea ne, cotidieque interpretaris vim in. Eu mei alia urbanitas posidonium. In vis graeco causae dissentiet, id sententiae appellantur repudiandae cum.

Altera reformidans ad sea, tantas facilisi definiebas eu qui. Ius nostrud principes eu, diam pericula mediocrem sit te. In quem incorrupte disputationi vis, ad nec erant mollis. Cum ad populo pericula iudicabit.</p>
           </div>
           <button className='bg-[#5C020C] w-auto gap-3 p-3 px-6 rounded-xl flex items-center justify-evenly'>
                <img src={buttonBook} className='h-[1.5rem]'/>
                Explore More
            </button>
        </div>

        {/* Downloaded books */}
        <div className=' absolute text-white top-[70rem] z-50 w-full  p-[2rem] font-Josefin_Sans flex flex-col items-center' >
        <h1 className='font-bold text-[3rem]'>Downloaded Books</h1>
           <div className=' flex  justify-center items-center '>
           <IoIosArrowBack size={30} />
              
                <div className='flex flex-col items-center '>
                    <img src={Book1} className=''/>
                    <span className='font-Josefin_Sans  ml-15 '>Gerald’s Game - By Stephen King</span>
                    <span className='font-Josefin_Sans ml-20 font-thin'>Horror Game</span>
                </div>

                <div className='flex flex-col items-center pr-6'>
                    <img src={Book1} className=''/>
                    <span className='font-Josefin_Sans  ml-15 '>Gerald’s Game - By Stephen King</span>
                    <span className='font-Josefin_Sans ml-20  font-thin'>Horror Game</span>
                </div>

                <div className='flex flex-col items-center pr-6'>
                    <img src={Book1} className=''/>
                    <span className='font-Josefin_Sans  ml-15 '>Gerald’s Game - By Stephen King</span>
                    <span className='font-Josefin_Sans ml-20 font-thin'>Horror Game</span>
                </div>

                <div className='flex flex-col items-center '>
                    <img src={Book1} className=''/>
                    <span className='font-Josefin_Sans  ml-15 '>Gerald’s Game - By Stephen King</span>
                    <span className='font-Josefin_Sans ml-20 font-thin'>Horror Game</span>
                </div>
            </div>
            <IoIosArrowForward  size={30} className='absolute top-[16.5rem] right-10'/>
            <button className='bg-[#5C020C] w-auto gap-3 mt-6 p-3 px-6 rounded-xl flex items-center justify-evenly'>
                <img src={buttonBook} className='h-[1.5rem]'/>
                Explore More
            </button>
        </div>
        {/* testimonials */}
        <div className=' absolute w-full top-[113rem]  '>
          
          <div className='flex justify-center items-center px-[10rem] '>
          <h1 className='text-white font-Josefin_Sans text-[4rem]'>Testimonials</h1>
            <div className=' w-[30rem]'><TestimonialCarouselDemo/></div>
          </div>
        </div>
      
      </div>
      <footer className='w-full absolute bottom-0 z-50 top-[160rem]'><Footer/></footer>
    </>
  )
}

export default LandingPage