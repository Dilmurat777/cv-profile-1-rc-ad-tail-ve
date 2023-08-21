import { faject, makers, ticket } from '@/public/assets'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { AiFillGithub, AiOutlineYoutube } from 'react-icons/ai'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section id='projects' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I have Built' titleNo='03' />
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        
        {/* faject-project */}

        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a
              className='w-full xl:w-1/2 h-auto relative group'
              href='https://faject-project.vercel.app/'
              target='_blank'
            >
              <div>
                <Image
                  className='w-full h-full object-contain'
                  src={faject}
                  alt='Image'
                  priority={true}
                />
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Fuatured Project
              </p>
              <h3 className='text-2xl font-bold'>Fuject Project</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                Faject-project with beautiful design site, There are i118n,
                social media and gallery. Also have Adaptive Design for different
                devices. In addition added beautiful effects.
                <span className='text-textGreen'></span>
                <span className='text-textGreen'></span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React.js</li>
                <li>HTML</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>Versal Deployment</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a
                  className='hover:text-textGreen duration-300'
                  href='https://github.com/Dilmurat777?tab=repositories'
                  target='_blank'
                >
                  <AiFillGithub />
                </a>
                <a
                  className='hover:text-textGreen duration-300'
                  href='#'
                  target='_blank'
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className='hover:text-textGreen duration-300'
                  href='https://faject-project.vercel.app/'
                  target='_blank'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* makers-curses */}

        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <a
              className='w-full xl:w-1/2 h-auto relative group'
              href='https://makers-curses.vercel.app/'
              target='_black'
            >
              <div>
                <Image
                  className='w-full h-full object-contain'
                  src={makers}
                  alt='Image'
                  priority={true}
                />
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Fuatured Project
              </p>
              <h3 className='text-2xl font-bold'>Makers</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16'>
                There is site carry more information about courses bootcamp
                front-end, back-end and ui/ux design. Also have Adaptive Design
                for different devices.
                <span className='text-textGreen'></span>
                <span className='text-textGreen'></span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Versal Deployment</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a
                  className='hover:text-textGreen duration-300'
                  href='https://github.com/Dilmurat777?tab=repositories'
                  target='_blank'
                >
                  <AiFillGithub />
                </a>
                <a
                  className='hover:text-textGreen duration-300'
                  href='#'
                  target='_blank'
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className='hover:text-textGreen duration-300'
                  href='https://makers-curses.vercel.app/'
                  target='_blank'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Kg */}

        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a
              className='w-full xl:w-1/2 h-auto relative group'
              href='https://main--ticket-kg.netlify.app/'
              target='_blank'
            >
              <div>
                <Image
                  className='w-full h-full object-contain'
                  src={ticket}
                  alt='Image'
                  priority={true}
                />
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Fuatured Project
              </p>
              <h3 className='text-2xl font-bold'>Ticket KG</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              This is site clone Ticket kg build with my team on hackathon. Site for selling tickets cinema, theater and e.g
                <span className='text-textGreen'></span>
                <span className='text-textGreen'></span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>netlify Deployment</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a
                  className='hover:text-textGreen duration-300'
                  href='https://github.com/Dilmurat777?tab=repositories'
                  target='_blank'
                >
                  <AiFillGithub />
                </a>
                <a
                  className='hover:text-textGreen duration-300'
                  href='#'
                  target='_blank'
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className='hover:text-textGreen duration-300'
                  href='https://main--ticket-kg.netlify.app/'
                  target='_blank'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
