'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

type Props = {
  open?: boolean
  title: string
  children: React.ReactNode
}

const CollapseCustom = ({ open = true, title, children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(open)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <div className="flex justify-between mb-2 items-center select-none cursor-pointer">
          <h2 className="text-md font-bold">{title}</h2>
          {!isOpen ? <ChevronDown className="size-4" /> : <ChevronUp className="size-4" />}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  )
}

export default CollapseCustom
