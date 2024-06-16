import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode
  className?: string
}

const MaxWidthContent = ({children, className}: Props) => {
  return ( 
    <div className={cn("max-w-screen-2xl md:mx-auto px-4", className)}>
      {children}
    </div> 
  );
}
 
export default MaxWidthContent;