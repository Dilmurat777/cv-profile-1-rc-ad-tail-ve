import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';
import { myPhoto1 } from '@/public/assets';
import React, {useState} from 'react';


const About = () => {
  const [showMore, setShowMore] = useState(false)


  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      <SectionTitle title='About Me' titleNo='01' />

      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lg:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
          <p>
            Hello, My name is Dilmurat! With over 10 years of experience in the
            retail industry, I have developed a strong foundation in customer
            service, sales, and team management. However, my passion for IT and
            programming led me to pursue a career in web development, a field
            that truly resonates with my interests and aspirations.
          </p>
          <p>
            In 2020, I discovered my interest in front-end development and embarked on a self-learning journey to master HTML and CSS. As I created my first website, I experienced a profound realization that I had found my true calling. This reminded me of <span>Albert Schweitzer,s quote</span>, 
          </p> <span>(Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.)</span>
         {
           showMore && (
             <div className='flex flex-col gap-3'>
               <p>
          Motivated by this newfound passion, I made the decision to further enhance my skills and knowledge by enrolling in courses focused on HTML, CSS, JavaScript, and React. These courses have provided me with a solid foundation and enabled me to explore the limitless possibilities of web development.
          </p>
          <p>
          I am a dedicated learner, always seeking opportunities to expand my skill set and stay up-to-date with the latest industry trends. I am particularly drawn to front-end development because of its dynamic nature and the ability to create visually appealing and user-friendly websites that leave a lasting impact.
          </p>
          <p>
          As I continue on this journey, I am excited to contribute my retail experience, problem-solving abilities, and strong work ethic to the field of web development. I am driven by the desire to create innovative solutions and deliver exceptional user experiences.
          </p>
          <p>
          Outside of coding, I enjoy exploring nature, reading books on personal development, and discovering new culinary experiences. These diverse interests provide a well-rounded perspective and fuel my creativity.
          </p>
          <p>
          Thank you for taking the time to learn more about me. I am eager to connect with like-minded professionals and explore opportunities where I can make a meaningful contribution as a web developer.
          </p>
            </div>
          )
        }
        
        <div>
        {showMore 
        ? <button onClick={() => setShowMore(false)} className='w-1/2 border border-textGreen py-2 rounded-md'>Show Less info About me</button>
        : <button onClick={() => setShowMore(true)} className='w-1/2 border border-textGreen py-2 rounded-md'>Show more info About me</button>
        }
        </div>

          <p>In progress in study and plans to study:</p>
          <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-5'>
            <li className='flex flex-row items-center gap-3'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6)
            </li>
            <li className='flex flex-row items-center gap-3'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className='flex flex-row items-center gap-3'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className='flex flex-row items-center gap-3'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Redux Toolkit
            </li>
            <li className='flex flex-row items-center gap-3'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Tailwind.css
            </li>
            <li className='flex flex-row items-center gap-3'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className='flex flex-row items-center gap-3'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className='flex flex-row items-center gap-3'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
          </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-96 relative group'>
          <div className='absolute w-full h-96 -left-6 -top-6 rounded-lg'>
            <div className='w-full h-96 relative z-20 flex pl-6 lgl:pl-0'>
              <Image
                className='rounded-lg h-full object-cover lgl:w-full w-[300px]'
                src={myPhoto1}
                alt='profileImg'
                priority={true}
              />
              <div className='hidden lgl:inline-block absolute w-full h-96 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </div>
          <div className='hidden lgl:inline-flex w-full h-96 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
        </div>
      </div>
    </section>
  )
}

export default About
