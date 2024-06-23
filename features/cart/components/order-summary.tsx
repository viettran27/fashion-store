import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MoveRight, Tag } from 'lucide-react'

type Props = {
  subtotal: number
  discount: number
  deliveryFee: number
}

const OrderSummary = ({ subtotal, discount, deliveryFee }: Props) => {
  return (
    <div className="w-full border border-gray-200 rounded-2xl p-4 md:basis-[40%] h-max space-y-2">
      <div className="text-2xl font-bold">Order Summary</div>
      <div className="space-y-2 py-2 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-bold">${subtotal}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Discount</span>
          <span className="font-bold">-${discount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Delivery Fee</span>
          <span className="font-bold">${deliveryFee}</span>
        </div>
      </div>
      <div className="py-2">
        <div className="flex justify-between items-center">
          <span>Total</span>
          <span className="font-bold">${subtotal + deliveryFee - discount}</span>
        </div>
        <div className="flex justify-between items-center mt-2 gap-2">
          <div className="relative">
            <Tag className="absolute size-4 top-1/2 translate-y-[-50%] left-2" />
            <Input className="rounded-full pl-7" placeholder="Add promo code" />
          </div>
          <Button className="rounded-full">Apply</Button>
        </div>
      </div>
      <Button className="w-full rounded-full">
        <div>Go to Checkout</div>
        <MoveRight className="size-4 ml-2" />
      </Button>
    </div>
  )
}

export default OrderSummary
