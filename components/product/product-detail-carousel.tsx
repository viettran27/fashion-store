'use client'

import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'

import Image from 'next/image'
import { Product } from '@/types/product'
import { cn } from '@/lib/utils'
import { products } from '@/data/product'
import useMedia from '@/hooks/useMedia'

type ProductDetailsCarouselProps = {
  product_id: string
}

export const ProductDetailsCarousel = ({ product_id }: ProductDetailsCarouselProps) => {
  // call api to get product details
  const isMobile = useMedia('(max-width: 768px)')
  const product: Product = products.find((product) => product.id === product_id) as Product
  console.log(isMobile, product)

  return (
    <div className={cn('w-full', isMobile ? 'flex flex-row' : 'flex flex-col')}>
      <Carousel orientation={isMobile ? 'horizontal' : 'vertical'} opts={{ align: 'start' }}>
        <CarouselContent className="flex justify-between">
          {product.img_urls.map((url, index) => (
            <CarouselItem key={index}>
              <Image
                src={url}
                alt={product.name}
                className="rounded-2xl w-full h-64 object-cover"
                width={200}
                height={200}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
