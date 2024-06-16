"use client";

import { useMedia } from "@/hooks/useMedia";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem } from "../ui/dropdown-menu";

import Link from "next/link";
import { Input } from "../ui/input";

const HeaderAction = () => {
  const isMobile = useMedia("(max-width: 768px)", true);

  return ( 
    <>
      {
        isMobile ? <Search className="size-5 cursor-pointer" />
        :
        <div className="relative w-full max-w-[500px]">
          <Search className="size-5 absolute top-1/2 translate-y-[-50%] left-2" />
          <Input 
            placeholder="Search for products..."
            className="bg-gray-200 pl-10 rounded-2xl"
          />
        </div>
      }
      <Link href={"/cart"}>
        <ShoppingCart className="size-5 cursor-pointer"/>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <CircleUserRound className="size-5 cursor-pointer"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
          <DropdownMenuItem>
            <div className="font-medium text-sm">Sign in</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="font-medium text-sm">Sign up</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
   );
}
 
export default HeaderAction;