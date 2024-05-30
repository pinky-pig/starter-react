import { Moon, Sun } from 'lucide-react'

import { flushSync } from 'react-dom'
import { useTheme } from './ThemeProvider'

export function ModeToggleLite() {
  const { theme, setTheme } = useTheme()

  async function toggleDark(event: React.MouseEvent) {
    // @ts-ignore
    // prettier-ignore
    const isAppearanceTransition = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isAppearanceTransition) {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      })
    }).ready

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: theme === 'light' ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement:
          theme === 'light'
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
      },
    )
  }

  return (
    <>
      <Sun
        onClick={(e) => {
          toggleDark(e)
        }}
        className="text-2xl cursor-pointer rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        onClick={(e) => {
          toggleDark(e)
        }}
        className="absolute cursor-pointer text-2xl rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </>
  )
}
