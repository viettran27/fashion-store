export interface ProductReview {
  id: string
  user_id: string
  content: string
  star: number
  datetime: Date
}

export interface ProductSpec {
  color: string[]
  size: string[]
  style: string[]
  discount: number
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
  star_mean: number
  img_urls: string[]
  specs?: ProductSpec
  reviews?: ProductReview[]
}
