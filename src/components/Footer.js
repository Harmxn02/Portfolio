import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer(props) {
  return (
    <div className="bg-white" id={props.section}>
      <header className="relative bg-white ">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-10 flex flex-col items-center justify-center text-white py-24 px-4 sm:px-6 lg:px-8">
          <p  className='text-xl font-medium'>Here are some of my socials + email address</p>
          <p  className='text-xl font-thin pb-4'>Feel free to contact me</p>
          <div className='flex flex-row gap-8 py-4'>
            <a href='https://www.linkedin.com/in/harmanpnahal/'   target="_blank" rel="noreferrer" ><FaLinkedin className='text-xl sm:text-2xl'/></a>
            <a href='https://github.com/Harmxn02/'                target="_blank" rel="noreferrer" ><FaGithub   className='text-xl sm:text-2xl'/></a>
            <a href='https://dev.to/harmxn'                       target="_blank" rel="noreferrer" ><FaDev      className='text-xl sm:text-2xl'/></a>
            <a href='mailto:harman.pnahal@gmail.com'              target="_blank" rel="noreferrer" ><SiGmail    className='text-xl sm:text-2xl'/></a>
          </div>
        </div>
      </header>
    </div>
  )
}
