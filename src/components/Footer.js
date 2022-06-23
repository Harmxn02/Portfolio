import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <div className="bg-white">
      <header className="relative bg-white ">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-10 flex flex-col items-center justify-center text-white py-24 px-4 sm:px-6 lg:px-8">
          <p  className='text-xl font-medium'>Here are some of my socials + email address</p>
          <p  className='text-xl font-thin pb-4'>Feel free to contact me</p>
          <div className='flex flex-row gap-8 py-4'>
            <FaLinkedin className='text-xl sm:text-2xl'/>
            <FaGithub   className='text-xl sm:text-2xl'/>
            <FaDev      className='text-xl sm:text-2xl'/>
            <SiGmail    className='text-xl sm:text-2xl'/>
          </div>
        </div>
      </header>
    </div>
  )
}
