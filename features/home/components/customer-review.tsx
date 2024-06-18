import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import MaxWidthContent from '@/components/max-width-content'
import ProductReview from '@/components/product/product-review'

const REVIEWS = [
  {
    name: 'Sara Smith',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 5
  },
  {
    name: 'Sara Smith',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae.',
    rating: 5
  },
  {
    name: 'Sara Smith',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae.',
    rating: 5
  },
  {
    name: 'Sara Smith',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae.',
    rating: 5
  }
]

const CustomerReview = () => {
  return (
    <MaxWidthContent>
      <div className="text-2xl md:text-3xl font-bold">OUR HAPPY CUSTOMERS</div>
      <Carousel className="mt-8">
        <CarouselContent>
          {REVIEWS.map((review, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
              <ProductReview
                className="max-w-full"
                userName={review.name}
                review={review.content}
                rating={review.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-top-[52px] right-[42px] left-auto" />
        <CarouselNext className="-top-[52px] right-0" />
      </Carousel>
    </MaxWidthContent>
  )
}

export default CustomerReview
