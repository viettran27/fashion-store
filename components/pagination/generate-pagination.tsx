import { PaginationEllipsis, PaginationItem, PaginationLink } from '@/components/ui/pagination'
import useMedia from '@/hooks/useMedia'
import { useCallback, useId, useMemo } from 'react'

export const generatePagination = (currentPage: number, totalPages: number, onPageChange: (page: number) => void) => {
  const pages: JSX.Element[] = []

  const renderEllipsis = useCallback(() => {
    return (
      <PaginationItem key={Math.random()}>
        <PaginationEllipsis />
      </PaginationItem>
    )
  }, [currentPage])

  const renderPageLink = useCallback(
    (pageNumber: number) => {
      return (
        <PaginationItem key={Math.random()}>
          <PaginationLink
            className="cursor-pointer"
            onClick={() => onPageChange(pageNumber)}
            isActive={pageNumber === currentPage}
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      )
    },
    [currentPage]
  )

  if (currentPage < 5) {
    for (let i = 1; i <= 5; i++) {
      pages.push(renderPageLink(i))
    }
    pages.push(renderEllipsis())
    pages.push(renderPageLink(totalPages))
  } else if (currentPage > totalPages - 4 && currentPage <= totalPages) {
    pages.push(renderPageLink(1))
    pages.push(renderEllipsis())
    for (let i = totalPages - 4; i <= totalPages; i++) {
      pages.push(renderPageLink(i))
    }
  } else {
    currentPage === 1 ? null : pages.push(renderPageLink(1))
    currentPage === 1 || currentPage - 1 === 1 || currentPage - 2 === totalPages ? null : pages.push(renderEllipsis())
    currentPage === 1 || currentPage - 1 === 1 ? null : pages.push(renderPageLink(currentPage - 1))
    pages.push(renderPageLink(currentPage))
    currentPage === totalPages || currentPage + 1 === totalPages ? null : pages.push(renderPageLink(currentPage + 1))
    currentPage === totalPages || currentPage + 1 === totalPages || currentPage + 2 === totalPages
      ? null
      : pages.push(renderEllipsis())
    currentPage === totalPages ? null : pages.push(renderPageLink(totalPages))
  }

  return pages
}
