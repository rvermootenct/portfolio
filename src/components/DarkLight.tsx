'use client'

import { useTheme } from 'next-themes'
import { FaCloudMoon } from 'react-icons/fa'
import { LuSunMoon } from 'react-icons/lu'
import classNames from 'classnames'

function DarkLight() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-violet-300 flex items-center" type="button">
      <span className={classNames(
        'w-7 h-7 flex items-center justify-center bg-violet-700 rounded-full transition-all duration-500',
        { 'ml-5': theme === 'dark' },
      )}
      >
        {theme === 'light' ? <FaCloudMoon className="text-white" size={14} /> : <LuSunMoon className="text-white" size={14} />}

      </span>
    </button>
  )
}

export default DarkLight
