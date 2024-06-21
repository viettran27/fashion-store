import { Facebook, Instagram, Twitter } from 'lucide-react'

import MaxWidthContent from '../max-width-content'

const FooterInfo = () => {
  return (
    <div className="bg-gray-300 -mt-20">
      <MaxWidthContent className="pt-24 grid md:grid-cols-3 gap-4 pb-4">
        <div className="space-y-2">
          <div className="text-2xl font-bold">SHOP VM</div>
          <div className="text-sm">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </div>
          <div className="flex gap-2">
            <Twitter color="black" className="size-6 p-1 border border-gray-200 bg-white rounded-full" />
            <Facebook color="white" className="size-6 p-1 border border-gray-200 bg-black rounded-full" />
            <Instagram color="black" className="size-6 p-1 border border-gray-200 bg-white rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-4 col-span-2 gap-4 justify-between">
          <div className="space-y-2">
            <div className="text-lg font-medium">Company</div>
            <div className="text-sm">About</div>
            <div className="text-sm">Features</div>
            <div className="text-sm">Works</div>
            <div className="text-sm">Career</div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-medium">Help</div>
            <div className="text-sm">Customer Suppor</div>
            <div className="text-sm">Delivery Details</div>
            <div className="text-sm">Terms & Conditions</div>
            <div className="text-sm">Privacy Policy</div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-medium">FAQ</div>
            <div className="text-sm">Account</div>
            <div className="text-sm">Manage Deliveries</div>
            <div className="text-sm">Orders</div>
            <div className="text-sm">Payments</div>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-medium">Resources</div>
            <div className="text-sm">Free eBooks</div>
            <div className="text-sm">Development Tutorial</div>
            <div className="text-sm">How to - Blog</div>
            <div className="text-sm">Youtube Playlist</div>
          </div>
        </div>
      </MaxWidthContent>
    </div>
  )
}

export default FooterInfo
