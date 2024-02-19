import styles from '../style';
import {logo} from '../assets';
import {footerLinks, socialMedia} from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <a href="#home" className="flex items-center gap-4">
          <img
            src={logo}
            alt="unitytrust"
            className="h-[60px] object-contain cursor-pointer"
          />
          <p className="text-white sm:text-[22px] text-[22px]">
            <span className="font-bold">Unity</span>Trust
          </p>
        </a>

        <div className="flex flex-row mt-6">
          {socialMedia.map ((social, index) => (
            <svg
              key={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer fill-primaryWhite ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
              onClick={() => window.open (social.link)}
            >
              <use href={social.icon} />
            </svg>
          ))}
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map (footerlink => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map ((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-primaryLime duration-150 cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between md:items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-start text-[16px] leading-[27px] text-dimWhite">
        Copyright &#169; 2024. All Rights Reserved. <br />
        Coded by:
        {' '}
        <a
          target="blank"
          href="https://github.com/ytsipak"
          className="underline underline-offset-2"
        >
          Yuriy Tsipak
        </a>
        <br />Design: <a
          target="blank"
          className="underline underline-offset-2"
          href="https://dribbble.com/shots/23619398-Fintech-Banking-website-design"
        >
          wolf pixel
        </a>
      </p>
    </div>
  </section>
);

export default Footer;
