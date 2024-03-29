'use client'

import Image from 'next/image'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoTerminal } from 'react-icons/io5'
import { getImagePath } from '@/utils/images'
import HeaderInfo from './HeaderInfo'
import data from '../data/header'

function Header() {
  const {
    image, name, jobTitle, location, experience,
  } = data
  return (
    <div className="flex flex-wrap md:flex-row flex-col items-center gap-y-9 gap-x-8 pb-7">
      <div className="w-[200px] md:w-[150px] h-[200px] md:h-[150px] relative rounded-xl overflow-hidden">
        <Image
          src={getImagePath(image)}
          alt="Profile picture"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-black capitalize text-violet-700 dark:text-white">
          {name}
        </h1>
        <h3 className="mt-2 text-lg md:text-xl font-semibold capitalize dark:text-zinc-400">
          {jobTitle}
        </h3>
        <div className="flex items-center gap-y-1 gap-x-4 mt-2">
          <HeaderInfo title={location} Icon={FaMapMarkerAlt} />
          <HeaderInfo title={experience} Icon={IoTerminal} />
        </div>
      </div>
    </div>
  )
}
export default Header
