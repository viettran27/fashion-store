import Versace from '@/assets/home/brand/versace.svg'
import Zara from '@/assets/home/brand/zara.svg'
import Gucci from '@/assets/home/brand/gucci.svg'
import Prada from '@/assets/home/brand/prada.svg'
import CalvinKlein from '@/assets/home/brand/calvinklein.svg'
import Image from 'next/image'
import MaxWidthContent from '@/components/max-width-content'

const BRANDS = [
  {
    src: Versace,
    alt: 'Versace Logo'
  },
  {
    src: Zara,
    alt: 'Zara Logo'
  },
  {
    src: Gucci,
    alt: 'Gucci Logo'
  },
  {
    src: Prada,
    alt: 'Prada Logo'
  },
  {
    src: CalvinKlein,
    alt: 'CalvinKlein Logo'
  }
]

const Brand = () => {
  return (
    <div className="bg-black">
      <MaxWidthContent className="flex justify-between py-6 gap-y-6 gap-x-4 flex-wrap">
        {BRANDS.map((brand, index) => (
          <Image key={index} src={brand.src} alt={brand.alt} />
        ))}
      </MaxWidthContent>
    </div>
  )
}

export default Brand
