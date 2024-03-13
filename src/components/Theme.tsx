'use client'

import { ThemeProvider }  from 'next-themes'
import { useEffect, useState } from 'react'

const Theme = ({ children }: { children: any }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
export default Theme;
