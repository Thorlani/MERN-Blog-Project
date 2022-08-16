import React, {useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import BlogContext from '../contextAPI/Context'
import cookies from 'js-cookie'

const Navbar = ({active}) => {
    const [isToggle, setIsToggle] = useState(false)

    const showMenu = () => {
        setIsToggle(!isToggle)
    }

    const { setIsAuthenticated } = useContext(BlogContext)

    const logout = () => {
      cookies.remove('user')
      setIsAuthenticated(false)
    }

  return (
    <>
        <nav className={`${active === "home" ? "w-[100%] h-[15vh] py-[3%] bg-[#60d3c9] sm:flex justify-between items-baseline" : "w-[100%] h-[10vh] py-[3%] bg-[#60d3c9] sm:flex justify-between items-baseline absolute top-0 px-[8%]"}`}>
          <div className='sm:flex items-baseline w-[40%]'>
            <div className={`w-[50px] h-[50px] rounded-[50%] ${isToggle ? 'bg-[#60d3c9] fixed' : 'bg-[white] relative'} flex justify-center items-center z-50`}>
                <h1 className={`font-bold text-2xl ${isToggle ? 'text-white' : 'text-[#60d3c9]'}`}>BT</h1>
                <h1 className={`font-bold text-2xl ${isToggle ? 'text-white' : 'text-[#60d3c9]'} opacity-[0.4] ml-1 absolute z-10 top-[12px]`}>BT</h1>
            </div>
            <ul className={`${active === "home" ? "hidden md:flex flex-col sm:ml-[45px] sm:flex-row w-[25%]" : "hidden lg:flex flex-col sm:ml-[45px] sm:flex-row w-[25%]"}`}>
              <li className='text-white'>
                <NavLink
                  to='/home'
                >
                  Home
                </NavLink>
              </li>
              <li className='sm:ml-[45px] text-white'>
                <NavLink
                  to='/about'
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className={`${active === "home" ? "hidden md:flex" : "hidden lg:flex"}`}>
            <li className='text-white'>
              {
                active === "home" ? <NavLink to='/account'>Account</NavLink> : <NavLink to='/' onClick={logout}>Log Out</NavLink>
              }
            </li>
          </ul>
          <ul className={`${ isToggle ? 'flex' : 'hidden'} fixed z-30 top-0 right-0 w-[100vw] h-[100vh] bg-white flex-col items-center justify-center lg:hidden`}>
            <li className='text-[#60d3c9] absolute top-[170px]'>
            <NavLink
                to='/home'
            >
                Home
            </NavLink>
            </li>
            <li className='text-[#60d3c9] absolute top-[260px]'>
            <NavLink
                to='/about'
            >
                About
            </NavLink>
            </li>
            <li className='text-[#60d3c9] absolute top-[440px]'>
            {
              active === "home" ? <NavLink to='/account'>Account</NavLink> : <NavLink to='/' onClick={logout}>Log Out</NavLink>
            }
            </li>
          </ul>
          <button onClick={showMenu} className={`${active === "home" ? `${isToggle ? 'fixed' : 'absolute'} top-8 right-8 z-50 md:hidden` : `${isToggle ? 'fixed' : 'absolute'} top-8 right-8 z-50 lg:hidden`}`}>
            <div className={`w-[21px] h-[2px] ${isToggle ? 'bg-[#60d3c9] ease-in duration-300 -rotate-45 transition-transform translate-y-[1px] translate-x-[1px]' : 'bg-[white]'}`}></div>
            <div className={`${isToggle ? 'hidden' : 'flex'} w-[21px] h-[2px] bg-[white] my-1`}></div>
            <div className={`w-[21px] h-[2px] ${isToggle ? 'bg-[#60d3c9] ease-in duration-300 rotate-45 transition-transform -translate-y-[0.5px] translate-x-[1px]' : 'bg-[white]'}`}></div>
          </button>
        </nav>
    </>
  )
}

export default Navbar