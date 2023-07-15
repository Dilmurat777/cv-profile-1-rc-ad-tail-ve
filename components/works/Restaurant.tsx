import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Turpan Restaurant
        <span className='text-textGreen tracking-wide'>
          Administrative Assistant
        </span>
      </h3>
      <p className='text-sm mt-1 text-textDark font-medium'>Dec 2020 - Jan 2022</p>
      <p className='text-sm mt-1 text-textDark font-medium'>Antalya Turkey</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Assist in maintaining relationships with suppliers and vendors,
          including ordering and tracking supplies. Monitor inventory levels,
          ensuring adequate stock of essential items. Collaborate with the
          kitchen and front-of-house staff to ensure proper inventory control.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Assist with employee onboarding, including paperwork, orientation, and
          training coordination. Maintain employee records, ensuring accuracy
          and confidentiality. Help track employee attendance, schedules, and
          time-off requests. Support payroll processing, including gathering and
          verifying timesheets and relevant information. Communication and
          Customer Service:
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Serve as a point of contact for internal and external stakeholders,
          answering inquiries and providing information. Assist in coordinating
          reservations and special events. Collaborate with staff to ensure
          effective communication and coordination.
        </li>
      </ul>
    </motion.div>
  )
}

export default ReactBD
