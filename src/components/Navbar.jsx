import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import { Link } from 'react-scroll';
import { MDBFooter } from 'mdb-react-ui-kit';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import Logo from '../assets/logo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { i18n, t } = useTranslation(["navbar"]);


  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '150px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            {t("home")}
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            {t("about")}
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            {t("skills")}
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            {t("work")}
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            {t("contact")}
          </Link>
        </li>

        <li>
          <select
            className="bg-[#0a192f] text-gray-300"
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >

            <option value="en">English</option>
            <option value="hu">Magyar</option>

          </select>
        </li>


      </ul>


      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>




      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '
        }
      >
        <li className='py-2 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            {t("home")}
          </Link>
        </li>
        <li className='py-2 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            {t("about")}
          </Link>
        </li>
        <li className='py-2 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            {t("skills")}
          </Link>
        </li>
        <li className='py-2 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            {t("work")}
          </Link>
        </li>
        <li className='py-2 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            {t("contact")}
          </Link>
        </li>


        <li className="py-2 text-4xl">
          <select
            className="bg-[#0a192f] text-gray-300 mb-20 "
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="hu">Magyar</option>
          </select>
        </li>


        <MDBFooter className='fixed bottom-0  w-full mt-5 ' style={{ backgroundColor: '#333333' }}>
          <li className="py-2 text-2xl ">
            <a
              className='flex justify-center  text-gray-300'
              href='https://www.linkedin.com/in/hal%C3%A1sz-p%C3%A9ter-3ba656189/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="py-2 text-2xl">
            <a
              className='flex justify-center  text-gray-300'
              href='https://github.com/danted9822'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </MDBFooter>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/hal%C3%A1sz-p%C3%A9ter-3ba656189/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/danted9822'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
