import Versace from '@/assets/home/versace.svg'
import Zara from '@/assets/home/zara.svg'
import Gucci from '@/assets/home/gucci.svg'
import Prada from '@/assets/home/prada.svg'
import CalvinKlein from '@/assets/home/calvinklein.svg'
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
      <MaxWidthContent className="flex justify-between py-6 gap-y-6 flex-wrap">
        {BRANDS.map((brand, index) => (
          <Image key={index} src={brand.src} alt={brand.alt} />
        ))}
      </MaxWidthContent>
    </div>
  )
}

export default Brand
