import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {

	const { t } = useTranslation(["about"]);
  return (
    <div name='about' className='w-full h-auto md:h-screen bg-[#0a192f] text-gray-300 pb-10'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right  pl-4 pb-5 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            {t("about")}
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
            <div className='sm:text-right text-4xl font-bold'>
              <p>{t("me")}</p>
            </div>
            <div>
              <p>{t("name")}</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
