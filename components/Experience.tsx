import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactBD from './works/Restaurant'
import Google from './works/Parisgroup'
import Apple from './works/Shark'

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true)
  const [workGoogle, setWorkGoogle] = useState(false)
  const [workApple, setWorkApple] = useState(false)

  const handleReactbd = () => {
    setWorkReactbd(true)
    setWorkGoogle(false)
    setWorkApple(false)
  }
  const handleGoogle = () => {
    setWorkReactbd(false)
    setWorkGoogle(true)
    setWorkApple(false)
  }
  const handleApple = () => {
    setWorkReactbd(false)
    setWorkGoogle(false)
    setWorkApple(true)
  }
  const handleSplash = () => {
    setWorkReactbd(false)
    setWorkGoogle(false)
    setWorkApple(false)
  }
  const handleAmazon = () => {
    setWorkReactbd(false)
    setWorkGoogle(false)
    setWorkApple(false)
  }

  return (
    <section
      id='experience'
      className='max-w-containerXs mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title='Where I have Worked' titleNo='02' />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-10'>
        <ul className='md:w-32 flex flex-col'>
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? 'border-l-4 border-textGreen text-textGreen'
                : 'border-l-4 border-hoverColor text-textDark'
            } border-1-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-6 font-medium`}
          >
            Restaurant
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? 'border-l-4 border-textGreen text-textGreen'
                : 'border-l-4 border-hoverColor text-textDark'
            } border-1-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-6 font-medium`}
          >
            Retail UAE
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? 'border-l-4 border-textGreen text-textGreen'
                : 'border-l-4 border-hoverColor text-textDark'
            } border-1-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-6 font-medium`}
          >
            Retail UAE
          </li>
        </ul>
        {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
        {workApple && <Apple />}
      </div>
    </section>
  )
}

export default Experience
