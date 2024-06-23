import MaxWidthContent from '@/components/max-width-content'
import OrderSummary from '@/features/cart/components/order-summary'
import ProductList from '@/features/cart/components/product-list'
import BreadCrumbCustom from '@/features/categories/components/breadcrumb-custom'

const CartPage = () => {
  return (
    <MaxWidthContent>
      <BreadCrumbCustom paths={['cart']} />
      <div className="mt-4">
        <h1 className="font-bold text-2xl">YOUR CART</h1>
        <div className="flex gap-4 mt-2 flex-wrap md:flex-nowrap">
          <ProductList />
          <OrderSummary subtotal={100} deliveryFee={15} discount={0} />
        </div>
      </div>
    </MaxWidthContent>
  )
}

export default CartPage
