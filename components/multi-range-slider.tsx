'use client'

import React, { useCallback, useEffect, useState, useRef } from 'react'

type Props = {
  min: number
  max: number
  minValue?: number
  maxValue?: number
  onChange: ({ min, max }: { min: number; max: number }) => void
}

const MultiRangeSlider = ({ min, max, minValue, maxValue, onChange }: Props) => {
  const [minVal, setMinVal] = useState<number>(min)
  const [maxVal, setMaxVal] = useState<number>(max)
  const minValRef = useRef<number>(min)
  const maxValRef = useRef<number>(max)
  const range = useRef<HTMLDivElement | null>(null)

  // Convert to percentage
  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  return (
    <div className="w-full relative">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1)
          setMinVal(value)
          minValRef.current = value
        }}
        className="accent-black absolute pointer-events-none h-[0] w-full z-[3]"
        style={{ zIndex: minVal > max - 100 ? '5' : '3' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1)
          setMaxVal(value)
          maxValRef.current = value
        }}
        className="accent-black absolute pointer-events-none h-[0] w-full z-[4]"
      />

      <div className="relative w-full flex justify-between">
        <div className="absolute rounded-[3px] h-[5px] bg-[#ced4da] w-full z-[1]" />
        <div ref={range} className="absolute rounded-[3px] h-[5px] bg-black z-[2]" />
        <div className="color-black mt-3 text-sm">${minVal}</div>
        <div className="color-black mt-3 text-sm">${maxVal}</div>
      </div>
    </div>
  )
}

export default MultiRangeSlider
