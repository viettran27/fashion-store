import { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '../ui/pagination'
import { generatePagination } from './generate-pagination'

type Props = {
  className?: string
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const PaginationCustom = ({ className, currentPage, totalPages, onPageChange }: Props) => {
  return (
    <Pagination className={className}>
      <PaginationContent className="w-full justify-center md:justify-between">
        <PaginationItem className="hidden md:block">
          <PaginationPrevious
            className="border border-gray-200 cursor-pointer select-none"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          />
        </PaginationItem>
        <div className="flex gap-2">{generatePagination(currentPage, totalPages, onPageChange)}</div>
        <PaginationItem className="hidden md:block">
          <PaginationNext
            className="border border-gray-200 cursor-pointer select-none"
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationCustom
