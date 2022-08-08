import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navBar';

const About = () => {
  console.log(Date.now());
  return (
    <div className='w-[100vw] h-full'>
      <div className='w-full  h-fit bg-[#60d3c9] px-[8%]'>
        <Navbar active="home" />
      </div>
      <div className='w-full h-[500px] flex flex-col sm:flex-row'>
        <div className='w-[100%] sm:w-[65%] h-full relative'>
          <img src="./aboutMe.jpg" alt="about me" className='w-full h-full object-center object-cover' />
        </div>
        <div className='w-[100%] sm:w-[35%] h-full flex justify-center items-center'>
          <div>
            <h1 className='font-bold text-2xl'>Hello</h1>
            <p>My name is Thorlani ... </p>
          </div>
        </div>
      </div>
      <div className='w-full h-fit px-[12%] text-center mt-3'>
        <p className='w-full h-[200px]'>
          I am a law student with a keen interest in technology. If there is anything I love the most, it would be to recreate things. This love led to me venturing into digital illustration and finally into web development. Since I began frontend web development, I have not turned back.
        </p>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-[200px]'>
        <p className='font-semibold text-xl mb-4'>Contact me</p>
        <div className='flex w-[100px] justify-between items-center'>
          <a href="https://web.facebook.com/ThorlaniFootballNews/" target="_blank" rel="noreferrer">
            <img src="./facebook.png" alt="facebook"/>
          </a>
          <a href="https://twitter.com/tolani_popoola" target="_blank" rel="noreferrer">
            <img src="./twitter.png" alt="twitter"/>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About