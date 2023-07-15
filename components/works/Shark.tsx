import { motion } from 'framer-motion';
import {TiArrowForward} from 'react-icons/ti'

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Paul and Shark
        <span className="text-textGreen tracking-wide">Jashanmal National Co</span>
      </h3>
      <p className='text-sm mt-1 text-textDark font-medium'>Sep 2018 - Mar 2019</p>
      <p className='text-sm mt-1 text-textDark font-medium'>Senior Sales Assistant</p>
      <p className='text-sm mt-1 text-textDark font-medium'>Dubai, Dubai, United Arab Emirates</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><TiArrowForward/></span>
          Assist in maintaining a clean and organized product floor; Guarantee cross and up-selling for all product categories;
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><TiArrowForward/></span>
          Manage financial transactions and purchases using cash registers and appropriate software systems;
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><TiArrowForward/></span>
          Merchandise products under the appropriate sections according to sales trends, date of release and as per the Department Manager recommendations;
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><TiArrowForward/></span>
          Achieve foretasted sales targets; provide exceptional customer service at all time; greet and engage every client;
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><TiArrowForward/></span>
          Establish and build relationships with client; maintain customer database; remain and contact with clients to retain lifetime customers.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;