import React from 'react';
import { useTranslation } from 'react-i18next';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import javaScript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import csharp from '../assets/csharp.png';
import dotnet from '../assets/dotnet.png';
import java from '../assets/java.png';
import postgresql from '../assets/postgresql.png';
import python from '../assets/python.png';
import django from '../assets/django.png';
import typeScript from '../assets/typescript.png';

const Skills = () => {

    const { t } = useTranslation(["skills"]);

    return (
        <div name='skills' className='w-full h-auto bg-[#0a192f] text-gray-300  pt-4'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>{t("skill")}</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pb-10 pt-10'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={javaScript} alt="HTML icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={typeScript} alt="HTML icon" />
                        <p className='my-4'>TypeScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactImg} alt="HTML icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={csharp} alt="HTML icon" />
                        <p className='my-4'>C#</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={dotnet} alt="HTML icon" />
                        <p className='my-4'>.Net</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={java} alt="HTML icon" />
                        <p className='my-4'>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={django} alt="HTML icon" />
                        <p className='my-4'>Django</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={postgresql} alt="HTML icon" />
                        <p className='my-4'>Postgresql</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
