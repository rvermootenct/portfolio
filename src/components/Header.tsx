"use client"

import Image from 'next/image';
import data from '../data/header'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoTerminal } from "react-icons/io5";
import HeaderInfo from './HeaderInfo';
const Header = () => {
  const { image, name, jobTitle, location, experience } = data;
  return (
    <div className='flex items-center gap-x-8'>
      <div className='w-[150px] h-[150px] relative rounded-full hover:rotate-6 overflow-hidden' >
        <Image
          src={image}
          fill alt="Profile picture"
          className='w-fll h-full object-cover hover:scale-125 trasition-all'
        />
      </div>
      <div>
        <h1 className='text-5xl font-black capitalize text-violet-700 dark:text-white' >
          {name}
        </h1>
        <h3 className='mt-2 text-xl font-bold capitalize dark:text-zinc-400'>
          {jobTitle}
        </h3>
        <div className='flex items-center gap-x-4 mt-2'>
          <HeaderInfo title={location} Icon={FaMapMarkerAlt} />
          <HeaderInfo title={experience} Icon={IoTerminal} />
        </div>

          <div className='flex items-center space-x-2'>

            <span className='capitalize text-base font-semibold text-zinc-900 dark:text-zinc-400'>
              {location}
            </span>
          </div>
        </div>
      </div>
  )
}
export default Header