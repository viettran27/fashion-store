'use client'

import { ChevronDown, Menu } from 'lucide-react'

import { MenuType, Route, RouteContainer } from '@/types/route'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu'
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from '../ui/sheet'
import { Button } from '../ui/button'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@radix-ui/react-collapsible'

const routes = [
  {
    type: MenuType.DROPDOWN,
    categories: 'Shop',
    options: [
      {
        href: '/men',
        categories: 'Men'
      },
      {
        href: '/women',
        categories: 'Woman'
      }
    ]
  },
  {
    type: MenuType.SINGLE,
    href: '/on-sales',
    categories: 'On Sale'
  },
  {
    type: MenuType.SINGLE,
    href: '/new-arrivals',
    categories: 'New Arrivals'
  },
  {
    type: MenuType.SINGLE,
    href: '/brands',
    categories: 'Brands'
  }
]

const Navigation = () => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <div className="text-2xl font-bold">Shop VM</div>
            </SheetHeader>
            <div className="mt-6">
              {routes.map((route: RouteContainer, index: number) => {
                switch (route.type) {
                  case MenuType.DROPDOWN:
                    return (
                      <Collapsible key={index}>
                        <CollapsibleTrigger asChild>
                          <div className="font-medium text-lg flex items-center justify-between cursor-pointer user-select-none py-2 hover:bg-gray-100 rounded-md px-2">
                            {route.categories}
                            <ChevronDown className="size-4" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {route.options?.map((option: Route, index: number) => {
                            return (
                              <Link key={index} href={option.href as Url}>
                                <div className="font-medium text-md py-1 ml-4 hover:bg-gray-100 px-2 rounded-md">
                                  {option.categories}
                                </div>
                              </Link>
                            )
                          })}
                        </CollapsibleContent>
                      </Collapsible>
                    )

                  default:
                    return (
                      <Link key={index} href={route.href as Url}>
                        <div className="font-medium text-lg py-2 hover:bg-gray-100 rounded-md px-2">
                          {route.categories}
                        </div>
                      </Link>
                    )
                }
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex space-x-6">
        {routes.map((route: RouteContainer, index: number) => {
          switch (route.type) {
            case MenuType.DROPDOWN:
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <div className="font-medium text-sm flex items-center cursor-pointer">
                      {route.categories}
                      <ChevronDown className="size-4" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {route.options?.map((option: Route, index: number) => {
                      return (
                        <Link key={index} href={option.href as Url}>
                          <DropdownMenuItem>
                            <div className="font-medium text-sm">{option.categories}</div>
                          </DropdownMenuItem>
                        </Link>
                      )
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              )

            default:
              return (
                <Link key={index} href={route.href as Url}>
                  <div className="font-medium text-sm">{route.categories}</div>
                </Link>
              )
          }
        })}
      </div>
    </>
  )
}

export default Navigation
