import Image from "next/image"

const SkillComponent = ({ skill }: {
  skill: {
    name: string
    image: string
  }
}) => {
  return (
    <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2">
    <div className="relative w-[25px] h-[25px]">
      <Image src={skill.image} alt={skill.name} width="0" height="0" sizes="100vw" className="w-full h-full object-cover fill" /> 
    </div>
    <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">{skill.name}</span>
  </div>
  )
}

export default SkillComponent
