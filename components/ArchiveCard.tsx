import { FaRegFolder } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({title, des, listItem, link}: Props) => {
  return (
    <div>
      <a href={link}>
      <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition transform duration-300 group'>
      <div className='flex justify-between items-center'>
        <FaRegFolder className='text-4xl text-textGreen'/>
        <RxOpenInNewWindow className='text-4xl hover:text-textGreen'/>
      </div>
      <div>
      <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
      <p className='text-sm mt-3'>{des}</p>
      </div>
      <ul className='w-full text-xs mdl:text-sm flex justify-between items-center text-textDark'>
        {
          listItem.map((item, i) => {
            return <li key={i}>{item}</li>
          })
        }
      </ul>
    </div>
      </a>
    </div>
  )
}

export default ArchiveCard
