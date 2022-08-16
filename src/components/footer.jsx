import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-fit bg-[#60d3c9] rounded-t-[12px] py-4'>
        <div className='w-full grid place-items-center'>
          <ul className='w-[80%] text-white text-xs sm:text-base flex justify-around'>
            <li>
              <NavLink to='/about'>
                About us and Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/terms'>
                Terms and Condition
              </NavLink>
            </li>
            <li>
              <NavLink to='/policies'>
                Privacy and Policies
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='w-full flex items-center justify-center mt-4'>
            <p className=''>coded by <span className='text-[white] font-bold text-xl'>THoRLaNi</span></p>
        </div>
    </div>
  )
}

export default Footer