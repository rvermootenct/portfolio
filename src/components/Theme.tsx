'use client'

import { ThemeProvider }  from 'next-themes'
import { useEffect, useState } from 'react'

const Theme = ({ children }: { children: any }) => {
  const [state, setState] = useState(false)
  useEffect(() => {
    setState(true)
  }, [])
  if (!state) return null
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
export default Theme;
