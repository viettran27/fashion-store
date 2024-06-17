import CarouselCustom from './carousel-custom'
import MaxWidthContent from './max-width-content'
import { Button } from './ui/button'

type Props = {
  title: string
}

const products = [
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  }
]

const ProductCarousel = ({ title }: Props) => {
  return (
    <MaxWidthContent className="flex flex-col items-center">
      <div className="w-full">
        <div className="text-center font-bold text-3xl">{title.toUpperCase()}</div>
        <CarouselCustom products={products} />
      </div>
      <Button variant={'outline'} className={'mx-auto w-full mt-8 rounded-2xl md:px-20 md:w-auto'}>
        View All
      </Button>
    </MaxWidthContent>
  )
}

export default ProductCarousel
