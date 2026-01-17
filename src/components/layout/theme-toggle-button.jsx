// hxtls-dao/components/theme-toggle-button.jsx
'use client'

import * as React from 'react'
import { Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggleButton() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <Button
      variant="outline"
      size="icon"
      disabled
      className="bg-transparent cursor-not-allowed"
      title="Dark mode only"
    >
      <Moon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Dark mode enabled</span>
    </Button>
  )
}