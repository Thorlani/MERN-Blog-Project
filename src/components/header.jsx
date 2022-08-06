import React, {useContext} from 'react'
import Navbar from './navBar'
import RightPics from '../asset/signInImage.jpg'
import RightPics2 from '../asset/RightPics2.jpg'
import RightPics3 from '../asset/RightPics3.jpg'
import { Link, useNavigate } from 'react-router-dom'
import BlogContext from '../contextAPI/Context'

const Header = () => {

    const { blogPost } = useContext(BlogContext)

    const images = [RightPics, RightPics2, RightPics3]

    console.log(images[0]);

    const bg = images[Math.floor(Math.random() * images.length)];
    const bg2 = images[Math.floor(Math.random() * images.length)];
    const bg3 = images[Math.floor(Math.random() * images.length)];
    const bg4 = images[Math.floor(Math.random() * images.length)];

    const article1 = blogPost[Math.floor(Math.random() * blogPost.length)]
    const article2 = blogPost[Math.floor(Math.random() * blogPost.length)]
    const article3 = blogPost[Math.floor(Math.random() * blogPost.length)]
    const article4 = blogPost[Math.floor(Math.random() * blogPost.length)]

    const truncateString = (str, num) => {
        if(str.length > num) {
            return str.slice(0, num) + '...';
        } else{
            return str
        }
    }
    const truncateString2 = (date, num) => {
        if(date.length > num) {
            return date.slice(0, num);
        } else{
            return date
        }
    }

  return (
    <>
    <div className='w-[100%] h-[100vh] md:h-[75vh] bg-[#60d3c9] px-[8%] rounded-b-[2%]'>
        <Navbar active="home" />
        <div className='hidden sm:flex w-full h-[1px] bg-white mb-[4%]'></div>
        <div className='w-[100%] h-[100%] md:h-[65%] flex flex-col md:flex-row justify-between'>
            <div className='w-[100%] md:w-[55%] h-[37%] md:h-[100%] relative'>
                <img src={bg} alt="Photo by : https://www.pexels.com" className='w-full h-full object-cover absolute z-10'/>
                <Link to={`/home/read/${article1._id}`}>
                    <div className='absolute z-20 bottom-5 left-[10px]'>
                        <h1 className='font-bold text-white text-[20px] md:text-[26px] lg:text-[24px] xl:text-[28px]'>{article1.title}</h1>
                        <span className='font-light text-[grey] text-[6px] md:text-[8px] lg:text-[11px] xl:text-sm'>{truncateString2(article1.date, 10)}</span>
                        <p className='text-white text-[10px] md:text-xs lg:text-sm xl:text-base opacity-[0.8]'>
                            {truncateString(article1.content, 80)}
                        </p>
                    </div>
                </Link>
            </div>
            <div className='w-[100%] md:w-[40%] h-[60%] md:h-[100%]  md:flex md:flex-col'>
                <div className='w-[100%] h-[20%] md:h-[30%] flex'>
                    <div className='w-[40%] h-[100%] relative overflow-hidden'>
                        <img src={bg2} alt="" className='absolute w-full h-full object-cover'/>
                    </div>
                    <Link to={`/home/read/${article4._id}`}>
                        <div className='w-[60%] h-[100%] pl-5'>
                            <h2 className='font-bold text-white text-[18px] leading-5 md:text-sm md:tracking-tight lg:text-[16px] xl:text-xl'>
                            {article4.title}
                            </h2>
                            <span className='font-light text-[grey] text-[10px] md:text-[8px] xl:text-[10px]'>{truncateString2(article4.date, 10)}</span>
                            <p className='hidden md:flex text-white md:text-[10px] text-[12px] opacity-[0.8]'>
                            {truncateString(article4.content, 25)}
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='w-full h-[1px] bg-white my-2'></div>
                <div className='w-[100%] h-[20%] md:h-[30%] flex'>
                    <div className='w-[40%] h-[100%] relative overflow-hidden'>
                        <img src={bg3} alt="" className='absolute w-full h-full object-cover'/>
                    </div>
                    <Link to={`/home/read/${article2._id}`}>
                        <div className='w-[60%] h-[100%] pl-5'>
                            <h2 className='font-bold text-white text-[18px] leading-5 md:text-[14px] md:tracking-tight lg:text-[16px] xl:text-xl'>
                            {article2.title}
                            </h2>
                            <span className='font-light text-[grey] text-[10px] md:text-[8px] xl:text-[10px]'>{truncateString2(article2.date, 10)}</span>
                            <p className='hidden md:flex text-white md:text-[10px] text-[12px] opacity-[0.8]'>
                            {truncateString(article2.content, 25)}
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='w-full h-[1px] bg-white my-2'></div>
                <div className='w-[100%] h-[20%] md:h-[30%] flex'>
                    <div className='w-[40%] h-[100%] relative overflow-hidden'>
                        <img src={bg4} alt="" className='absolute w-full h-full object-cover'/>
                    </div>
                    <Link to={`/home/read/${article3._id}`}>
                        <div className='w-[60%] h-[100%] pl-5'>
                            <h2 className='font-bold text-white text-[18px] leading-5 md:text-[14px] md:tracking-tight lg:text-[16px] xl:text-xl'>
                            {article3.title}
                            </h2>
                            <span className='font-light text-[grey] text-[10px] md:text-[8px] xl:text-[10px]'>{truncateString2(article3.date, 10)}</span>
                            <p className='hidden md:flex text-white md:text-[10px] text-[12px] opacity-[0.8]'>
                            {truncateString(article3.content, 25)}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header