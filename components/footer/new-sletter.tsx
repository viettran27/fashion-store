import { Mail } from 'lucide-react'
import MaxWidthContent from '../max-width-content'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const NewSeletter = () => {
  return (
    <MaxWidthContent className="relative z-10">
      <div className="bg-black rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center p-6">
        <div className="text-white font-bold text-2xl md:text-3xl md:w-1/2">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
        <div className="space-y-4 mt-4 md:mt-0">
          <div className="relative">
            <Mail className="size-4 absolute top-1/2 translate-y-[-50%] left-2" />
            <Input className="rounded-full pl-8" placeholder="Enter your email address" />
          </div>
          <Button variant="outline" className="w-full rounded-full">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </MaxWidthContent>
  )
}

export default NewSeletter
