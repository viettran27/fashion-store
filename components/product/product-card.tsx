import Image from 'next/image'
import ProductDescription from './product-description'

type Props = {
  imgSrc: string
  title: string
  ratingValue: number
  price: number
  oldPrice?: number
}

const ProductCard = ({ imgSrc, title, ratingValue, price, oldPrice }: Props) => {
  return (
    <div className="space-y-2 w-full">
      <Image src={imgSrc} alt={'alt'} className="rounded-2xl w-full h-64 object-cover" width={200} height={200} />
      <ProductDescription title={title} ratingValue={ratingValue} price={price} oldPrice={oldPrice} />
    </div>
  )
}

export default ProductCard
