import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const NavBar = () => {

    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
       <div>
        <h1 className='animate-bounce duration-300 smooth '>Welcome</h1>
        </div> 

        {/* menu */}
            {/*its hidden when width< 750 px */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        


    {/*Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10' >
      {!nav ? <FaBars/>: <FaTimes/>}
    </div>
    {/*Mobile menu */}
    <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li> 
    </ul>

    {/* social icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/federico-orquin-fullstack/' target='_blank' >
                linkedin<FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/FedericoOrquin' target='_blank' >
                GitHub<FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='mailto:fedeorquinn@gmail.com' target='_blank' >
                Email<FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/federico-orquin-fullstack/' target='_blank' >
                Resume<BsFillPersonLinesFill size={30}/>
            </a>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default NavBar