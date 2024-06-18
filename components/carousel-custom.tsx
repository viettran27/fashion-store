'use client'

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import ProductCard from './product/product-card'

type Product = {
  imgSrc: string
  title: string
  ratingValue: number
  price: number
  oldPrice?: number
}

type Props = {
  products: Product[]
}

const CarouselCustom = ({ products }: Props) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: true
        })
      ]}
      className="w-full mt-8"
    >
      <CarouselContent className="flex justify-between">
        {products.map((product: Product, index: number) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 basis-1/2">
            <ProductCard
              imgSrc={product.imgSrc}
              title={product.title}
              ratingValue={product.ratingValue}
              price={product.price}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CarouselCustom
