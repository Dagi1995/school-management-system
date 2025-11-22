"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2">
        <div className="relative w-[200px]">
          <span className="absolute left-2 top-2 text-gray-400">
            <Image src="/search.png" alt="search" width={14} height={14} />
          </span>
          <Input
            type="text"
            placeholder="Search..."
            className="pl-8 h-8 text-sm"
          />
        </div>
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline" className="rounded-full h-8 w-8">
          <Image src="/message.png" alt="messages" width={18} height={18} />
        </Button>

        <div className="relative">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full h-8 w-8"
          >
            <Image
              src="/announcement.png"
              alt="notifications"
              width={18}
              height={18}
            />
          </Button>
          <Badge
            className="absolute -top-2 -right-2 rounded-full px-1 text-[10px]"
            variant="destructive"
          >
            1
          </Badge>
        </div>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="flex flex-col text-right">
                <span className="text-xs font-medium">John Doe</span>
                <span className="text-[10px] text-gray-500">Admin</span>
              </div>
              <Image
                src="/avatar.png"
                alt="User Avatar"
                width={36}
                height={36}
                className="rounded-full"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
