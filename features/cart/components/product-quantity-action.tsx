'use client'

import { Minus, Plus } from 'lucide-react'

const ProductQuantityAction = () => {
  return (
    <div className="flex py-1 items-center rounded-full bg-gray-200">
      <div className="px-2 cursor-pointer">
        <Minus className="size-4" />
      </div>
      <div className="border-l border-r border-gray-200 text-sm px-2">
        <span>1</span>
      </div>
      <div className="px-2 cursor-pointer">
        <Plus className="size-4" />
      </div>
    </div>
  )
}

export default ProductQuantityAction
