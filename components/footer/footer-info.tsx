import { Facebook, Instagram, Twitter } from 'lucide-react'

import MaxWidthContent from '../max-width-content'

const FooterInfo = () => {
  return (
    <div className="bg-gray-300 -mt-20 h-[400px]">
      <MaxWidthContent className="pt-24 grid md:grid-cols-3 gap-10">
        <div className="space-y-2">
          <div className="text-2xl font-bold">SHOP VM</div>
          <div>We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
          <div className="flex gap-2">
            <Twitter color="black" className="size-6 p-1 border border-gray-200 bg-white rounded-full" />
            <Facebook color="white" className="size-6 p-1 border border-gray-200 bg-black rounded-full" />
            <Instagram color="black" className="size-6 p-1 border border-gray-200 bg-white rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-4 col-span-2">
          <div className="space-y-2">
            <div className="text-2xl font-bold">Company</div>
            <div className="text-sm">About</div>
            <div className="text-sm">Features</div>
            <div className="text-sm">Works</div>
            <div className="text-sm">Career</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">Company</div>
            <div className="text-sm">About</div>
            <div className="text-sm">Features</div>
            <div className="text-sm">Works</div>
            <div className="text-sm">Career</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">Company</div>
            <div className="text-sm">About</div>
            <div className="text-sm">Features</div>
            <div className="text-sm">Works</div>
            <div className="text-sm">Career</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">Company</div>
            <div className="text-sm">About</div>
            <div className="text-sm">Features</div>
            <div className="text-sm">Works</div>
            <div className="text-sm">Career</div>
          </div>
        </div>
      </MaxWidthContent>
    </div>
  )
}

export default FooterInfo
