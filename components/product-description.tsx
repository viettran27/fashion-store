import { cn } from '@/lib/utils'
import Rating from './rating'

type Props = {
  className?: string
  titleClassName?: string
  priceClassName?: string
  starClassName?: string
  discountClassName?: string
  title: string
  ratingValue: number
  sizeRating?: number
  price: number
  oldPrice?: number
}

const ProductDescription = ({
  className,
  titleClassName,
  priceClassName,
  starClassName,
  discountClassName,
  title,
  ratingValue,
  sizeRating = 20,
  price,
  oldPrice
}: Props) => {
  const discount = oldPrice ? ((price - oldPrice) / oldPrice) * 100 : 0

  return (
    <div className={cn('space-y-1', className)}>
      <h3 className={cn('text-lg font-bold', titleClassName)}>{title}</h3>
      <div className={cn('flex items-center', starClassName)}>
        <Rating count={5} value={ratingValue} edit={false} size={sizeRating} className="mr-2" />
        <span className="text-sm">{ratingValue}</span>
        <span className="text-sm">/5</span>
      </div>
      <div className={cn('flex gap-3 items-center text-xl', priceClassName)}>
        <span className="font-bold">${price.toLocaleString('en-US')}</span>
        {oldPrice && oldPrice !== price && (
          <>
            <span className="font-bold text-gray-400 line-through">${oldPrice.toLocaleString('en-US')}</span>
            <span className={cn('bg-red-300 text-xs px-2 text-white rounded-full', discountClassName)}>
              {discount.toFixed(0)}%
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductDescription
