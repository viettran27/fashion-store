import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

const MaxWidthContent = ({ children, className }: Props) => {
  return <div className={cn('max-w-screen-2xl container', className)}>{children}</div>
}

export default MaxWidthContent
