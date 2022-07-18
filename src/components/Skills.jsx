import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Express from '../assets/express.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f]  text-gray-300'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies i've worked with</p>
            </div>
            {/*Icon container*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#ff9865] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#63bbff] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#eef767] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#67caee] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#87f7dd] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="tailwind icon"/>
                    <p className='my-4'>TailWind</p>
                </div>
                <div className='shadow-md shadow-[#77f769] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="node icon"/>
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#767c85] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Express} alt="express icon"/>
                    <p className='my-4'>Express</p>
                </div>
                <div className='shadow-md shadow-[#797777] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon"/>
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills