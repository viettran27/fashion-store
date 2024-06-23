'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbLink
} from '@/components/ui/breadcrumb'
import { uppercase } from '@/utils/uppercase'
import { useParams } from 'next/navigation'

type Props = {
  paths?: string[]
}

const BreadCrumbCustom = ({ paths }: Props) => {
  let { type: lastPaths }: { type: string[] } = useParams()
  lastPaths = paths ? paths : lastPaths

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {lastPaths
          ? lastPaths.map((path, index) => (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={`/${path}`}>{uppercase(path)}</BreadcrumbLink>
                {index !== lastPaths.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))
          : null}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbCustom
