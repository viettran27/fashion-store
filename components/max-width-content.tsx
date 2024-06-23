import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

const MaxWidthContent = ({ children, className }: Props) => {
  return <div className={cn('max-w-screen-2xl px-4 md:container', className)}>{children}</div>
}

export default MaxWidthContent
