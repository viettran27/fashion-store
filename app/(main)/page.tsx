import ProductCarousel from '@/components/product-carousel'
import Banner from '@/features/home/components/banner'
import Brand from '@/features/home/components/brand'

const Home = () => {
  return (
    <div className="space-y-6">
      <div>
        <Banner />
        <Brand />
      </div>
      <ProductCarousel title="New Arrivals" />
    </div>
  )
}

export default Home
