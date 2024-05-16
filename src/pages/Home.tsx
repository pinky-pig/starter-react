import { SketchButton } from '@arvin/materials'
import { Button } from '@/components/ui/button'
import IconifyDemo from '@/components/demo/IconifyDemo'

export function Home() {
  return (
    <>
      <main className="grid w-full min-h-screen place-items-center">
        <Button variant="secondary">Button</Button>
        <SketchButton />
        <IconifyDemo />
      </main>
    </>
  )
}

export default Home
