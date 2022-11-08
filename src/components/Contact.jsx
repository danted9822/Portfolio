import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {


	const { t } = useTranslation(["contact"]);

  return (
    <div name='contact' className='w-full h-auto bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/959c1107-e1e0-445b-8f46-1b202fbf77af" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>{t("contact")}</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder={t("name")} name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder={t("email")} name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder={t("message")}></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>{t("collaborate")}</button>
        </form>
    </div>
  )
}

export default Contact