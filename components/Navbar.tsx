import { myLogo } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { TbBrandGithub } from 'react-icons/tb'
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube
} from 'react-icons/sl'

const Navbar = () => {
  const ref = useRef<string | any>('')
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setShowMenu(false)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth'
    })
    // Update the class name of the clicked link
    const links = document.querySelectorAll('.nav-link')
    links.forEach(link => {
      link.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
  }


  function handleClick(e: any) {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowMenu(false);
    }
  }

  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className='w-20' src={myLogo} alt='logo' priority={true} />
        </motion.div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex flex-row gap-7 text-[13px]'>
            <Link
              href='#home'
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href='#about'
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className='text-textGreen'>01.</span>About
              </motion.li>
            </Link>
            <Link
              href='#experience'
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className='text-textGreen'>02.</span>Experience
              </motion.li>
            </Link>
            <Link
              href='#projects'
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className='text-textGreen'>03.</span>Project
              </motion.li>
            </Link>
            <Link
              href='#contact'
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <span className='text-textGreen'>04.</span>Contact
              </motion.li>
            </Link>
          </ul>
          <a href='assets/Dilmurat-cv-2023.pdf' target='_blank'>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className='text-textGreen border border-textGreen rounded-md py-2 px-4 text-[13px] hover:bg-hoverColor duration-300'
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon section */}
        <div
          onClick={() => setShowMenu(true)}
          className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'
        >
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 translate-all ease-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 translate-all ease-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 translate-all ease-out duration-300'></span>
        </div>

        {showMenu && (
          
          <div 
          ref={(node) => (ref.current =node)}
          onClick={handleClick}
          className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'
              >
              <RxCross1
                className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'
                onClick={() => setShowMenu(false)}
                />
              <div>
                <ul className='flex flex-col text-base gap-7'>
                  <Link
                    href='#home'
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.1 }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href='#about'
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.2 }}
                    >
                      <span className='text-textGreen'>01.</span>About
                    </motion.li>
                  </Link>
                  <Link
                    href='#experience'
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.3 }}
                    >
                      <span className='text-textGreen'>02.</span>Experience
                    </motion.li>
                  </Link>
                  <Link
                    href='#projects'
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.4 }}
                    >
                      <span className='text-textGreen'>03.</span>Project
                    </motion.li>
                  </Link>
                  <Link
                    href='#contact'
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.5 }}
                    >
                      <span className='text-textGreen'>04.</span>Contact
                    </motion.li>
                  </Link>
                </ul>
               <a href='assets/Dilmurat-cv-2023.pdf' target='_blank'>
               <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className='text-textGreen border border-textGreen rounded-md py-2 px-8 mt-8 text-[13px] hover:bg-hoverColor duration-300'
                >
                  Resume
                </motion.button>
               </a>
              </div>
                <div className='flex gap-3 mt-5'>
                  <a href='https://github.com/Dilmurat777' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                      <TbBrandGithub />
                    </span>
                  </a>
                  {/* <a href='#' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                      <SlSocialYoutube />
                    </span>
                  </a> */}
                  <a href='https://www.linkedin.com/in/mrdilmurat-idrisov/' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                      <SlSocialLinkedin />
                    </span>
                  </a>
                  <a href='https://www.facebook.com/dilmurat.idrisov' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                      <SlSocialFacebook />
                    </span>
                  </a>
                  <a href='https://www.instagram.com/dilmuratdmx777/' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                      <SlSocialInstagram />
                    </span>
                  </a>
                </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
