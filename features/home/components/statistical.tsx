import { cn } from '@/lib/utils'

type Props = {
  quantity: number
  description: string
  className?: string
}

const Statistical = ({ quantity, description, className }: Props) => {
  return (
    <div className={cn('px-4', className)}>
      <div className="text-4xl font-bold">{quantity}+</div>
      <div className="text-sm text-opacity-60">{description}</div>
    </div>
  )
}

export default Statistical
