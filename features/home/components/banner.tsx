import banner from '@/assets/home/banner.jpg'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Statistical from './statistical'
import MaxWidthContent from '@/components/max-width-content'

const Banner = () => {
  return (
    <div className="relative bg-[#F3F0F1]">
      <MaxWidthContent className="md:flex justify-between md:items-center">
        <div className="pt-6 space-y-4 max-w-1/2 max-w-[700px]">
          <div>
            <h1 className="text-4xl font-bold">FIND CLOTHES</h1>
            <h1 className="text-4xl font-bold">THAT MATCHES</h1>
            <h1 className="text-4xl font-bold">YOUR STYLES</h1>
          </div>
          <p className="text-sm text-opacity-60">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </p>
          <Button className="rounded-2xl w-full md:w-auto md:px-10">Shop Now</Button>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 border-lf">
            <Statistical quantity={200} description="International Brands" />
            <Statistical quantity={2000} description="High-Quality Products" />
            <Statistical quantity={30000} description="Happy Customers" />
          </div>
        </div>
        <Image
          className="lg:w-1/4 md:1/3 w-full h-[500px] lg:h-auto object-contain"
          src={banner}
          alt="banner"
          layout="fixed"
          quality={100}
          width={1200}
          height={800}
        />
      </MaxWidthContent>
    </div>
  )
}

export default Banner
