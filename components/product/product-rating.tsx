'use client'

import React, { useState } from 'react'

import { cn } from '@/lib/utils'

interface RatingProps {
  className?: string
  count: number
  value: number
  color?: string
  hoverColor?: string
  activeColor?: string
  size?: number
  edit?: boolean
  isHalf?: boolean
  onChange?: (value: number) => void
}

interface IconProps {
  size?: number
  color?: string
}

const FullStar = ({ size = 24, color = '#000000' }: IconProps) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  )
}

const HalfStar = ({ size = 24, color = '#000000' }: IconProps) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  )
}

const EmptyStar = ({ size = 24, color = '#000000' }: IconProps) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  )
}

const ProductRating: React.FC<RatingProps> = ({
  className,
  count,
  value,
  color = '#ffd700',
  hoverColor = '#ffc107',
  activeColor = '#ffc107',
  size = 30,
  edit = false,
  isHalf = true,
  onChange
}) => {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!edit) return
    if (isHalf) {
      const target = e.target as HTMLDivElement
      const rect = target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const w = rect.width
      if (x > w * 0.5) {
        setHoverValue(index)
      } else {
        setHoverValue(index - 0.5)
      }
    } else {
      setHoverValue(index)
    }
  }

  const handleMouseLeave = () => {
    if (!edit) return

    setHoverValue(undefined)
  }

  const handleClick = (index: number) => {
    if (!edit) {
      return
    }
    if (onChange) {
      onChange((hoverValue as number) + 1)
    }
  }

  const getColor = (index: number) => {
    if (hoverValue !== undefined) {
      if (index <= hoverValue) {
        return hoverColor
      }
    }
    if (value > index) {
      return activeColor
    }
    return color
  }

  const stars = []

  for (let i = 0; i < count; i++) {
    let star: React.ReactElement
    if (isHalf && value - i > 0 && value - i < 1) {
      star = <HalfStar />
    } else if (i < value) {
      star = <FullStar />
    } else {
      star = <EmptyStar />
    }

    if (hoverValue !== undefined && edit) {
      if (i <= hoverValue) {
        star = <FullStar />
      }

      if (i > hoverValue) {
        star = <EmptyStar />
      }

      if (i === hoverValue + 0.5) {
        star = <HalfStar />
      }
    }

    stars.push(
      <div
        key={i}
        style={{ cursor: 'pointer' }}
        onMouseMove={(e) => handleMouseMove(e, i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(i)}
      >
        {React.cloneElement(star, {
          size: size,
          color: getColor(i)
        })}
      </div>
    )
  }

  return <div className={cn('flex', className)}>{stars}</div>
}

export default ProductRating
