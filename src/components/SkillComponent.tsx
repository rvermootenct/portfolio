import { getImagePath } from '@/utils/images'
import Image from 'next/image'

function SkillComponent({ skill }: {
  skill: string
}) {
  return (
    <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2">
      <div className="relative w-[25px] h-[25px]">
        <Image src={getImagePath(skill)} alt={skill} width="0" height="0" sizes="100vw" className="w-full h-full object-cover fill" />
      </div>
      <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">{skill}</span>
    </div>
  )
}

export default SkillComponent
