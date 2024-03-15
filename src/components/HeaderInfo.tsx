import { IconType } from 'react-icons'

function HeaderInfo({ Icon, title } : {title: string, Icon: IconType}) {
  return (
    <div className="flex items-center space-x-2">
      <Icon
        className="text-violet-700 dark:text-zinc-400"
        size={16}
      />
      <span className="capitalize text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-400">
        {title}
      </span>
    </div>
  )
}

export default HeaderInfo
