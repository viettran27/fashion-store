'use client'

import { SlidersHorizontal } from 'lucide-react'
import FilterContent from './filter-content'

const FilterSide = () => {
  return (
    <div className="basis-[200px] border border-gray-200 rounded-2xl p-4 hidden md:block">
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <h2 className="text-lg font-bold">Filter</h2>
        <SlidersHorizontal className="size-4" />
      </div>
      <FilterContent />
    </div>
  )
}

export default FilterSide
