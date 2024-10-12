import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
// Email import { HiOutlineMail } from 'react-icons/hi'
// Resume import { BsFillPersonLinesFill } from 'react-icons/bs'

import Logo from '../assets/logos/dml_reg_edge_logo.png'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="navbar" className='fixed w-full h-20 flex justify-between items-center px-4 bg-black text-gray-300'>
      {/* logo */}
      <div>
        <img src={Logo} alt="DevMentor Labs Logo" style={{width: '200px'}} />
      </div>
      {/* menu */}
      <div className=''>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Developers</li>
            <li>Mentors</li>
            <li>Contact</li>
        </ul>
      </div>
      
      {/* hamburger menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#54575c] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Developers</li>
          <li className='py-6 text-4xl'>Mentors</li>
          <li className='py-6 text-4xl'>Contact</li>
      </ul>
      
      
      {/* social icons on the side */}
      <div className='flex fixed flex-col top-[200px] left-0'>
        <ul>
          <li>
            <a href='/' className='flex justify-between items-center w-full text-[#e7eae3] ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-700'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-40 h-16 flex justify-between items-center'>
            <a href='/' className='flex justify-between items-center w-full text-[#e7eae3] ml-[-100px] hover:ml-[-10px] duration-200 bg-[#b4637f]'>
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-40 h-16 flex justify-between items-center'>
            <a href='/' className='flex justify-between items-center w-full text-[#e7eae3] ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-700'>
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
