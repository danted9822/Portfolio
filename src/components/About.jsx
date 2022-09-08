import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 pb-20'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-20'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Péter, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. Some info about me. I like to spend my 
              free time with different activities such as jogging, reading, playing computer games, 
              listening to music, hangging out with my friends.
              In the future I would like to work as a Junior Full-Stack Developer.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
