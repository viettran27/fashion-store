'use client'

import { CircleUserRound, Search, ShoppingCart } from 'lucide-react'
import { DropdownMenuItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu'

import Link from 'next/link'
import { Input } from '../ui/input'

const HeaderAction = () => {
  return (
    <>
      <Search className="size-5 cursor-pointer md:hidden" />
      <div className="hidden md:block relative w-full max-w-[500px]">
        <Search className="size-5 absolute top-1/2 translate-y-[-50%] left-2" />
        <Input placeholder="Search for products..." className="bg-gray-200 pl-10 rounded-2xl" />
      </div>
      <Link href={'/cart'}>
        <ShoppingCart className="size-5 cursor-pointer" />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <CircleUserRound className="size-5 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="font-medium text-sm">Sign in</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="font-medium text-sm">Sign up</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default HeaderAction
