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

const BreadCrumbCustom = () => {
  const { type: paths }: { type: string[] } = useParams()
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {paths
          ? paths.map((path, index) => (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={`/${path}`}>{uppercase(path)}</BreadcrumbLink>
                {index !== paths.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))
          : null}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbCustom
