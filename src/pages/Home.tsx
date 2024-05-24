import { SketchButton } from '@arvin/materials'
import { Button } from '@/components/ui/button'
import AppIcon from '@/components/icons/AppIcon'
import IconifyDemo from '@/components/demo/IconifyDemo'
import TheFooter from '@/components/layout/TheFooter'

export function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 pt-10">
        <div className="py-8" />

        <AppIcon className="w-12 h-12 inline-block mb-4" />

        <h1 className="text-4xl font-bold mb-2">Starter React</h1>

        <p>
          <em className="text-sm opacity-75">A simple template for React.</em>
        </p>

        <div className="w-full max-w-[652px] mx-auto text-start px-[16px]">
          <br />
          <br />
          <h2>Some Buttons</h2>
          <div className="w-full flex flex-row flex-wrap gap-4">
            <Button>ShadcnButton</Button>
            <SketchButton>SketchButton</SketchButton>
          </div>
        </div>

        <div className="w-full max-w-[652px] mx-auto text-start px-[16px]">
          <br />
          <br />
          <h2>Iconify</h2>
          <IconifyDemo />
        </div>

        <br />
        <br />
        <TheFooter />
      </div>
    </>
  )
}

export default Home
