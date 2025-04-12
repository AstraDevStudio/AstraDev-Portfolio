// import React from 'react'
import Background from '../assets/icons/Background.svg'
import box from '../assets/icons/box.svg'
import Image from '../assets/icons/Image.svg'
import text from '../assets/icons/text.svg'
import picture from '../assets/icons/picture.svg'
const IntroBox = () => {
  return (
    <div className='h-[45rem] bg-slate-400/15 backdrop-blur-md w-full rounded-3xl flex flex-col items-center'>
            <div className='h-[4.6rem] w-full border-b border-gray-500 flex justify-center gap-[10rem] items-center '> 
                <div className='w-[40%] h-full flex justify-evenly ml-[15rem] '>
                <img src={Image} className='w-[1.4rem]'/>
                <img src={Background} className='w-[1.4rem]'/>
                <img src={text} className='w-[1.4rem]'/>
                <img src={picture} className='w-[1.4rem]'/>
                <img src={box} className='w-[1.4rem]'/>
                </div>
                <div className='border border-gray-400 rounded-md px-6 p-4 h-[3rem] flex justify-center items-center text-gray-400 '>Publish</div>
            </div>
          {/* main */}
          <div className='bg-[#08021E]/80 h-full w-[70%] border-l border-gray-400 backdrop-blur-2xl border-r flex justify-center items-center overflow-hidden  z-40 '>
                

              <div className='h-[30rem]  border-white border  bg-slate-400/15 backdrop-blur-md w-[25rem] rounded-3xl overflow-hidden shadow-[#69329e] shadow-xl flex flex-col items-center'>
                <div className='h-[4.6rem] w-full border-b border-gray-500 flex justify-center gap-[10rem] items-center '> 
                    <div className='w-[40%] h-full flex justify-evenly ml-[15rem] '>
                      
                    </div>
                  
                </div> 
                <div className='bg-radial from-[#69329e]/40 from-10% to-[#08021E]  h-full w-full border-gray-100 '></div>
              </div>
          </div>
    </div>
  )
}

export default IntroBox