import product1 from '@/assets/fake_product/product1.jpg'
import Image from 'next/image'
import ProductDescription from '../product_description'

const ProductCard = () => {
  return (
    <div className="space-y-2">
      <Image src={product1} alt={'alt'} className="rounded-2xl size-64" width={200} height={200} />
      <ProductDescription title="T-Shirt with Tape Details" ratingValue={3.5} price={120} oldPrice={140} />
    </div>
  )
}

export default ProductCard
