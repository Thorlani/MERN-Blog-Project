import React from 'react'
import Navbar from './navBar'
import RightPics from '../asset/signInImage.jpg'
import RightPics2 from '../asset/RightPics2.jpg'
import RightPics3 from '../asset/RightPics3.jpg'

const Header = () => {
  return (
    <>
    <div className='w-[100%] h-[100vh] md:h-[75vh] bg-[#60d3c9] px-[8%] rounded-b-[2%]'>
        <Navbar />
        <div className='hidden sm:flex w-full h-[1px] bg-white mb-[4%]'></div>
        <div className='w-[100%] h-[100%] md:h-[65%] flex flex-col md:flex-row justify-between'>
            <div className='w-[100%] md:w-[55%] h-[37%] md:h-[100%] relative'>
                <img src={RightPics3} alt="Photo by : https://www.pexels.com" className='w-full h-full object-cover absolute z-10'/>
                <div className='absolute z-20 bottom-5 left-[10px]'>
                    <h1 className='font-bold text-white text-[20px] md:text-[26px] lg:text-[24px] xl:text-[28px]'>How and When to use Flexblox or Grid</h1>
                    <span className='font-light text-[grey] text-[6px] md:text-[8px] lg:text-[11px] xl:text-sm'>March 12, 2022</span>
                    <p className='text-white text-[10px] md:text-xs lg:text-sm xl:text-base opacity-[0.8]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi possimus quos assumenda similique officia molestias ex illo fugiat placeat est fuga quod perferendis recusandae laboriosam, aut corrupti. Dolorum at, numquam
                    </p>
                </div>
            </div>
            <div className='w-[100%] md:w-[40%] h-[60%] md:h-[100%]  md:flex md:flex-col'>
                <div className='w-[100%] h-[20%] md:h-[30%] flex'>
                    <div className='w-[40%] h-[100%] relative overflow-hidden'>
                        <img src={RightPics} alt="" className='absolute w-full h-full object-cover'/>
                    </div>
                    <div className='w-[60%] h-[100%] pl-5'>
                        <h2 className='font-bold text-white text-[18px] leading-5 md:text-sm md:tracking-tight lg:text-[16px] xl:text-xl'>
                        How to use Media query for Beginners
                        </h2>
                        <span className='font-light text-[grey] text-[10px] md:text-[8px] xl:text-[10px]'>March 12, 2022</span>
                        <p className='hidden md:flex text-white md:text-[10px] text-[12px] opacity-[0.8]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-white my-2'></div>
                <div className='w-[100%] h-[20%] md:h-[30%] flex'>
                    <div className='w-[40%] h-[100%] relative overflow-hidden'>
                        <img src={RightPics2} alt="" className='absolute w-full h-full object-cover'/>
                    </div>
                    <div className='w-[60%] h-[100%] pl-5'>
                        <h2 className='font-bold text-white text-[18px] leading-5 md:text-[14px] md:tracking-tight lg:text-[16px] xl:text-xl'>
                        How to use Media query for Beginners
                        </h2>
                        <span className='font-light text-[grey] text-[10px] md:text-[8px] xl:text-[10px]'>March 12, 2022</span>
                        <p className='hidden md:flex text-white md:text-[10px] text-[12px] opacity-[0.8]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-white my-2'></div>
                <div className='w-[100%] h-[20%] md:h-[30%] flex'>
                    <div className='w-[40%] h-[100%] relative overflow-hidden'>
                        <img src={RightPics3} alt="" className='absolute w-full h-full object-cover'/>
                    </div>
                    <div className='w-[60%] h-[100%] pl-5'>
                        <h2 className='font-bold text-white text-[18px] leading-5 md:text-[14px] md:tracking-tight lg:text-[16px] xl:text-xl'>
                        How to use Media query for Beginners
                        </h2>
                        <span className='font-light text-[grey] text-[10px] md:text-[8px] xl:text-[10px]'>March 12, 2022</span>
                        <p className='hidden md:flex text-white md:text-[10px] text-[12px] opacity-[0.8]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header