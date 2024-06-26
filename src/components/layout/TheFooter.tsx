import { ModeToggleLite } from './ModeToggle'

export default function TheFooter() {
  return (
    <nav className="mt-6 inline-flex gap-2 text-xl px-8 py-4">
      <ModeToggleLite></ModeToggleLite>

      <a
        className="i-carbon-logo-github text-2xl"
        rel="noreferrer"
        href="https://github.com/pinky-pig/starter-react"
        target="_blank"
        title="GitHub"
      />

      <a
        className="i-carbon-user-filled text-2xl"
        rel="noreferrer"
        href="https://mmeme.me/"
        target="_blank"
        title="GitHub"
      />
    </nav>
  )
}
