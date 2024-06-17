import ProductCarousel from '@/components/product-carousel'
import Banner from '@/features/home/components/banner'
import Brand from '@/features/home/components/brand'
import BrowserStyle from '@/features/home/components/browser-style'

const Home = () => {
  return (
    <div className="space-y-12">
      <div>
        <Banner />
        <Brand />
      </div>
      <ProductCarousel title="New Arrivals" />
      <BrowserStyle />
    </div>
  )
}

export default Home
