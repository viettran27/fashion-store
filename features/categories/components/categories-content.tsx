'use client'
import { useEffect, useState } from 'react'
import { uppercase } from '@/utils/uppercase'
import { useParams } from 'next/navigation'
import useMedia from '@/hooks/useMedia'

import { ChevronDown, SlidersHorizontal } from 'lucide-react'

import FilterContent from './filter-content'
import ProductCard from '@/components/product/product-card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import PaginationCustom from '@/components/pagination/pagination-custom'

const products = [
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  },
  {
    imgSrc:
      'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6U10G0D6NnU4kECZrH2zRca12B3ss6DYkLMad-92DSptn9O1QrIOrFyJEslwQuvHe5PHqMd03tDybqjdpMuPTjm4J9g-FLnHpJ2UojSl3oLGj3GPj2hrjTrUQt1jQUqZS0auL7N7cSoZzeWmZhlo1YQMV~QARYd23DsmOSJ6GXMCYKaRvgAbfcv09SAc706iauWCXViIVx03pIeM~eiE0ecDm5BmMboaeM~4wvDfxzE5~H02mUTgiaw3D1TZSQDfehVYsj5mk08OAb2AfigjwqqtSP~LsN4tuIcprAGMEB-6FiShWBqEOK0BVqzpYaAMTF0~lglGOd5a0S2cFW2FQ__',
    title: 'T-shirt with Tape Details',
    ratingValue: 4.5,
    price: 120
  }
]

const CategoriesContent = () => {
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { type: paths }: { type: string[] } = useParams()
  const isMobile = useMedia('(max-width: 768px)')

  return (
    <div className="w-full">
      <div className="flex item-center justify-between">
        <div className="font-bold text-lg">{uppercase(paths.at(-1) as string)}</div>
        <div className="flex items-center">
          <span className="text-xs opacity-[60%]">Showing 1-10 of 100 results</span>
          <div className="hidden md:flex items-center">
            <span className="text-xs opacity-[60%] mx-2">Sort by:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  <div className="text-sm font-bold mr-1">Most popular</div>
                  <ChevronDown className="size-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Most popular</DropdownMenuItem>
                <DropdownMenuItem>A-Z</DropdownMenuItem>
                <DropdownMenuItem>Price</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {mounted && isMobile && (
            <Drawer>
              <DrawerTrigger asChild>
                <SlidersHorizontal className="size-4 cursor-pointer md:hidden ml-2" />
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-6">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <h2 className="text-lg font-bold">Filter</h2>
                    <SlidersHorizontal className="size-4" />
                  </div>
                  <FilterContent />
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
          {products.map((product: any, index: number) => (
            <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              ratingValue={product.ratingValue}
              price={product.price}
            />
          ))}
        </div>
        <PaginationCustom
          className="mt-4 border-t border-gray-200 pt-4"
          currentPage={page}
          totalPages={10}
          onPageChange={setPage}
        />
      </div>
    </div>
  )
}

export default CategoriesContent
