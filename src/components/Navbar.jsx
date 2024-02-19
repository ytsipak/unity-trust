import {useState} from 'react';

import {logo, symbols} from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  const [active, setActive] = useState ('Home');
  const [toggle, setToggle] = useState (false);

  return (
    <nav className="w-full flex absolute py-6 justify-between items-center navbar z-10">
      <a href="#home" className="flex items-center gap-4">
        <img
          src={logo}
          alt="unitytrust"
          className="h-[40px] object-contain cursor-pointer"
        />
        <p className="text-white sm:text-[22px] text-[18px]">
          <span className="font-bold">Unity</span>Trust
        </p>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map ((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimWhite'} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive (nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">

        <svg
          className="w-[28px] h-[28px] fill-primaryWhite object-contain"
          onClick={() => setToggle (!toggle)}
        >
          <use
            href={toggle ? `${symbols}#icon-close` : `${symbols}#icon-menu`}
          />
        </svg>

        <div
          className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map ((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimWhite'} ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive (nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
