import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';


const Home = () => {
	const { t } = useTranslation(["home"]);
  
  return (
    <div name='home' className='w-full md:h-screen h-auto bg-[#0a192f] pt-20'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p  className='text-pink-600'>{t("greeting")}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        {t("name")}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        {t("junior")}
        </h2>
        <p className='text-[#8892b0] py-4  max-w-[700px]'>
        {t("about")}
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 invisible md:visible'>
            <Link to='work' smooth={true} duration={500}>
            {t("work")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
