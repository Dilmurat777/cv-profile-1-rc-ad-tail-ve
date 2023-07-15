import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialFacebook } from 'react-icons/sl';
import { TfiInstagram } from 'react-icons/tfi';

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-end text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Dilmurat777" target='_blank'>
          <span className="w-10 h-10 bg-hoverColor inline-flex rounded-full items-center justify-center cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/mrdilmurat-idrisov/" target='_blank'>
          <span className="w-10 h-10 bg-hoverColor inline-flex rounded-full items-center justify-center cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.facebook.com/dilmurat.idrisov/" target='_blank'>
          <span className="w-10 h-10 bg-hoverColor inline-flex rounded-full items-center justify-center cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/dilmuratdmx777/" target='_blank'>
          <span className="w-10 h-10 bg-hoverColor inline-flex rounded-full items-center justify-center cursor-pointer hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
            <TfiInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
LeftSide;
