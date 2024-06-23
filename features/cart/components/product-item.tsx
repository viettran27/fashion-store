'use client'

import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import ProductQuantityAction from './product-quantity-action'
import { uppercase } from '@/utils/uppercase'

type Props = {
  imgSrc: string
  title: string
  size: string
  color: string
  price: number
}

const ProductItem = ({ imgSrc, title, size, color, price }: Props) => {
  return (
    <div className="flex [&:not(:last-child)]:mb-4 [&:not(:last-child)]:pb-4 [&:not(:last-child)]:border-b [:not(:first-child)]:mt-2 gap-4 items-center border-gray-200">
      <div className="flex-1 min-w-max">
        <Image
          src={imgSrc}
          className="size-[90px] object-cover rounded-2xl aspect-square"
          alt={title}
          width={200}
          height={200}
        />
      </div>
      <div className="overflow-hidden">
        <h3 className="font-bold truncate">{title}</h3>
        <p className="text-sm">
          <span className="font-bold">Size: </span>
          {size.toUpperCase()}
        </p>
        <p className="text-sm">
          <span className="font-bold">Color: </span>
          {uppercase(color)}
        </p>
        <p className="font-bold">${price}</p>
      </div>
      <div className="flex flex-col justify-between items-end flex-1 min-w-max h-[90px]">
        <Trash2 className="size-5" color="red" />
        <ProductQuantityAction />
      </div>
    </div>
  )
}

export default ProductItem
