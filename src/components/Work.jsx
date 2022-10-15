import React from 'react';
import { useTranslation } from 'react-i18next';
import Blackjack from '../assets/Blackjack.png';
import codecoolshop from '../assets/codecoolshop.png';
import Restore from '../assets/Re-store.png';
import Cv from '../assets/reactCv.png';
import Todo from '../assets/todoApp.png';
import Weather from '../assets/weatherApp.png';

const Work = () => {
	const { t } = useTranslation(["work"]);
  return (
    <div name='work' className='w-full md:h-screen h-auto text-gray-300 bg-[#0a192f]  pb-4'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            {t("work")}
          </p>
          <p className='py-6'> {t("current")}</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Restore})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              E-Commerce-Webshop
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/danted9822/E-Commerce-Webshop'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${codecoolshop})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Codecool-shop
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/danted9822/Codecool-shop'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Blackjack})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2x2 font-bold text-white tracking-wider'>
              javascript-blackjack-game
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/danted9822/javascript-blackjack-game'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

           {/* Grid Item */}
           <div
            style={{ backgroundImage: `url(${Cv})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2x2 font-bold text-white tracking-wider'>
              React-Cv
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/danted9822/React-CV'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

           {/* Grid Item */}
           <div
            style={{ backgroundImage: `url(${Todo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2x2 font-bold text-white tracking-wider'>
              React-Todo-App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/danted9822/React-Todo-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

           {/* Grid Item */}
           <div
            style={{ backgroundImage: `url(${Weather})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2x2 font-bold text-white tracking-wider'>
              React-Weather-App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/danted9822/React-Weather-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Work;
