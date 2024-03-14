import Image from "next/image"
import SkillComponent from "./SkillComponent"
import { Data } from "@/types/global"
import { getImagePath } from "@/utils/images"
  
const Tablet = ({ info }: { info: Data}) => {
  return (
    <div className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10" >
      <div className="relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden">
        <Image
          src={getImagePath(info.image)}
          className="w-full h-full absolute top-0 left-0 bottom-0 right-0"
          alt="project image"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <div className='flex-1'>
        <h2 className="text-black dark:text-white capitalize font-bold text-base">
          {info.title}
        </h2>
        <span className="text-sm font-bold text-zinc-500">{info.subtitle}</span>
        {info.description &&
          <div className="flex items-center gap-x-1 mt-2">
            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[]2px">
              {info.description}
            </span>
          </div>
        }
        <div className="flex gap-2 flex-wrap my-4">
          {
            info.skills.map(
              (skill, i) => (
                <div key={i} >
                  <SkillComponent skill={skill} />
                </div>
              )
            )
          }
        </div>
        <div className="mt-6">
          {info.blurb.map((text, index) => (
            <span key={index} className="text-zinc-700 dark:text-zinc-400 text-base font-semibold">{text}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tablet
