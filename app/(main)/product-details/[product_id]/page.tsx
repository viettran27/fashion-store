import { ProductDetailsCarousel } from '@/components/product/product-detail-carousel'

const ProductDetails = ({ params }: { params: { product_id: string } }) => {
  const { product_id } = params
  console.log({ product_id })

  return (
    <div className="flex flex-col">
      <ProductDetailsCarousel product_id={product_id as string} />
    </div>
  )
}

export default ProductDetails
