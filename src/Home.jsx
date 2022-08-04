import React from 'react'
import postImage1 from './asset/post1.jpg'
import Header from './components/header'
import Footer from './components/footer'


const Home = () => {
  return (
    <>
      <Header />
      <div className='w-[100%] h-[1900px] md:h-[1000px] lg:h-[700px] px-[8%] py-[3.5%]'>
        <h3 className='font-medium text-[grey] capitalize mb-10'>Latest Articles</h3>
        <div className='w-full h-[40vh] grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-4'>
          <div className='w-[100%] h-[100%]'>
            <div className='w-[100%] md:h-[40%] lg:h-[50%] relative overflow-hidden mb-[10px]'>
              <img src={postImage1} alt="Photo by Rodion Kutsaiev: https://www.pexels.com/photo/white-yellow-and-blue-ball-8566875/" className='w-full h-full object-cover'/>
            </div>
            <div>
              <span className='font-light text-[grey] text-sm'>August 1, 2022</span>
              <h1 className='font-bold text-[#5c5b5b] text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus fugiat sit provident.</h1>
              <p className='font-normal text-[grey] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia omnis, unde doloribus similique fuga deserunt!</p>
            </div>
          </div>
          <div className='w-[100%] h-[100%]'>
            <div className='w-[100%] md:h-[40%] lg:h-[50%] relative overflow-hidden  mb-[10px]'>
              <img src={postImage1} alt="Photo by Rodion Kutsaiev: https://www.pexels.com/photo/white-yellow-and-blue-ball-8566875/" className=' w-full h-full object-cover'/>
            </div>
            <div>
              <span className='font-light text-[grey] text-sm'>August 1, 2022</span>
              <h1 className='font-bold text-[#5c5b5b] text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus fugiat sit provident.</h1>
              <p className='font-normal text-[grey] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia omnis, unde doloribus similique fuga deserunt!</p>
            </div>
          </div>
          <div className='w-[100%] h-[100%]'>
            <div className='w-[100%] md:h-[40%] lg:h-[50%] relative overflow-hidden  mb-[10px]'>
              <img src={postImage1} alt="Photo by Rodion Kutsaiev: https://www.pexels.com/photo/white-yellow-and-blue-ball-8566875/" className=' w-full h-full object-cover'/>
            </div>
            <div>
              <span className='font-light text-[grey] text-sm'>August 1, 2022</span>
              <h1 className='font-bold text-[#5c5b5b] text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus fugiat sit provident.</h1>
              <p className='font-normal text-[grey] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia omnis, unde doloribus similique fuga deserunt!</p>
            </div>
          </div>
          <div className='w-[100%] h-[100%]'>
            <div className='w-[100%] md:h-[40%] lg:h-[50%] relative overflow-hidden  mb-[10px]'>
              <img src={postImage1} alt="Photo by Rodion Kutsaiev: https://www.pexels.com/photo/white-yellow-and-blue-ball-8566875/" className=' w-full h-full object-cover'/>
            </div>
            <div>
              <span className='font-light text-[grey] text-sm'>August 1, 2022</span>
              <h1 className='font-bold text-[#5c5b5b] text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus fugiat sit provident.</h1>
              <p className='font-normal text-[grey] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia omnis, unde doloribus similique fuga deserunt!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home