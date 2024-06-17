import { cn } from '@/lib/utils'

import { Check } from 'lucide-react'

import Rating from './rating'

type Props = {
  userName: string
  review: string
  rating: number
  className?: string
}

const Review = ({ userName, review, rating, className }: Props) => {
  return (
    <div
      className={cn(
        'border border-gray-200 rounded-lg p-6 max-w-[450px] max-h-[200px] space-y-1 overflow-hidden flex flex-col h-full',
        className
      )}
    >
      <Rating count={5} value={rating} size={20} />
      <div className="flex items-center">
        <h3 className="text-lg font-bold">{userName}.</h3>
        <div className="rounded-full bg-green-500 p-1 ml-2">
          <Check className="size-2" color="white" />
        </div>
      </div>
      <p className="text-sm line-clamp-4 flex-1 mt-auto">"{review}"</p>
    </div>
  )
}

export default Review
