'use client'

import { ChevronRight } from 'lucide-react'

import MultiRangeSlider from '@/components/multi-range-slider'
import CollapseCustom from '@/components/collapse-custom'
import { Button } from '@/components/ui/button'

const CLOTHES_TYPES = ['T-shirts', 'Shorts', 'Shirts', 'Hoddies', 'Jeans']
const COLORS = ['green', 'red', 'yellow', 'orange', 'blue', 'purple', 'white', 'black']
const SIZES = ['S', 'M', 'L', 'XL', 'XXL']
const STYLES = ['Casual', 'Formal', 'Party', 'Gym']

const FilterContent = () => {
  return (
    <div className="space-y-2">
      <div>
        {CLOTHES_TYPES.map((item) => (
          <div key={item} className="text-sm flex items-center justify-between py-1 cursor-pointer hover:bg-gray-100">
            <div>{item}</div>
            <ChevronRight className="size-4" />
          </div>
        ))}
      </div>
      <div className="pt-2 border-t border-gray-200">
        <CollapseCustom title="Price">
          <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => {}} />
        </CollapseCustom>
      </div>
      <div className="pt-2 border-t border-gray-200">
        <CollapseCustom title="Colors">
          <div className="flex flex-wrap gap-2">
            {COLORS.map((color) => (
              <div
                key={color}
                className="size-6 border rounded-full cursor-pointer"
                style={{ backgroundColor: color, borderColor: `darken(${color})` }}
              ></div>
            ))}
          </div>
        </CollapseCustom>
      </div>
      <div className="pt-2 border-t border-gray-200">
        <CollapseCustom title="Size">
          <div className="flex flex-wrap gap-2">
            {SIZES.map((size) => (
              <div
                key={size}
                className="border bg-gray-200 text-sm rounded-2xl px-4 flex justify-center cursor-pointer"
              >
                {size}
              </div>
            ))}
          </div>
        </CollapseCustom>
      </div>
      <div className="pt-2 border-t border-gray-200">
        <CollapseCustom title="Dress Style">
          {STYLES.map((style) => (
            <div
              key={style}
              className="text-sm flex items-center justify-between py-1 cursor-pointer hover:bg-gray-100"
            >
              <div>{style}</div>
              <ChevronRight className="size-4" />
            </div>
          ))}
        </CollapseCustom>
      </div>
      <Button className="w-full rounded-full">Apply Filter</Button>
    </div>
  )
}

export default FilterContent
