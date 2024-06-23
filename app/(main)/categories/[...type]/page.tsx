import MaxWidthContent from '@/components/max-width-content'
import BreadCrumbCustom from '@/features/categories/components/breadcrumb-custom'
import CategoriesContent from '@/features/categories/components/categories-content'
import FilterSide from '@/features/categories/components/filter-side'

const Categories = () => {
  return (
    <MaxWidthContent className="border-t border-gray-200">
      <div className="mt-5">
        <BreadCrumbCustom />
        <div className="flex mt-5 gap-5">
          <FilterSide />
          <CategoriesContent />
        </div>
      </div>
    </MaxWidthContent>
  )
}

export default Categories
