import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Pierre Cardin, Balmain
        <span className="text-textGreen tracking-wide">Parisgroup </span>
      </h3>
      <p className="text-sm mt-1 text-textDark font-medium">Nov 2019 - Mar 2020</p>
      <p className='text-sm mt-1 text-textDark font-medium'>Sales Associate</p>
      <p className='text-sm text-textDark'>Dubai, Dubai, United Arab Emirates</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Customer Assistance: Provide exceptional customer service by greeting and assisting customers, understanding their needs, and offering personalized product recommendations.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Sales Generation: Actively engage with customers to promote and sell luxury products, utilizing product knowledge and persuasive techniques to drive sales and meet or exceed targets.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Product Knowledge: Maintain in-depth knowledge of the luxury brand, its products, materials, and craftsmanship, ensuring accurate and up-to-date information is provided to customers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Client Relationship Management: Cultivate and nurture relationships with clients, establishing a loyal customer base through personalized attention, follow-up communication, and providing an exceptional shopping experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Stock Management: Monitor inventory levels, assist with stock replenishment, and conduct regular inventory checks to ensure product availability and accurate stock records.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Store Operations: Collaborate with team members to maintain a clean and organized store environment, participate in regular training sessions, and contribute to a positive and cohesive work atmosphere.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
