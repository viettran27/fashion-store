import MaxWidthContent from '@/components/max-width-content'
import Image from 'next/image'

import casual from '@/assets/home/browser-style/casual.jpg'
import formal from '@/assets/home/browser-style/formal.jpg'
import party from '@/assets/home/browser-style/party.jpg'
import gym from '@/assets/home/browser-style/gym.jpg'
import { cn } from '@/lib/utils'

const STYLES = [
  {
    src: casual,
    alt: 'Casual',
    className: 'md:row-span-1 md:col-span-1 md:h-[300px]'
  },
  {
    src: formal,
    alt: 'Formal',
    className: 'md:row-span-1 md:col-span-2 md:h-[300px]'
  },
  {
    src: party,
    alt: 'Party',
    className: 'md:row-span-2 md:col-span-2 md:h-[300px]'
  },
  {
    src: gym,
    alt: 'Gym',
    className: 'md:row-span-2 md:col-span-1 md:h-[300px]'
  }
]

const BrowserStyle = () => {
  return (
    <MaxWidthContent>
      <div className="bg-gray-300 rounded-2xl p-6 md:p-8 lg:p-12">
        <div className="text-2xl md:text-3xl font-bold text-center pb-8 w-[200px] mx-auto md:w-auto">
          BROWSER BY DRESS STYLE
        </div>
        <div className="gap-4 grid grid-rows-4 md:grid-rows-2 md:grid-cols-3">
          {STYLES.map((style, index) => (
            <div key={index} className={cn('relative h-[250px]', style.className)}>
              <div className="absolute top-[10%] left-[5%] font-bold text-xl">{style.alt}</div>
              <Image
                key={index}
                className="w-full h-full object-fill rounded-2xl"
                src={style.src}
                alt="casual"
                quality={100}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </MaxWidthContent>
  )
}

export default BrowserStyle
