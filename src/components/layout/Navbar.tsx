
import React, { useState } from 'react';
import { Bell, MessageSquare, Plus, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-campus-600 flex items-center">
            <span className="text-campus-600 mr-1">Campus</span>
            <span className="text-gray-800">Events</span>
          </h1>
        </div>
        <div className="hidden md:flex relative w-full max-w-sm items-center">
          <Search className="absolute left-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search events..."
            className="w-full rounded-lg pl-8 bg-gray-50 border-gray-200 focus:border-campus-500"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex items-center gap-1 text-campus-600 border-campus-200 hover:bg-campus-50 hover:text-campus-700"
        >
          <Plus className="h-4 w-4" />
          <span>Create Event</span>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-campus-600"
        >
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-campus-600"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-8 w-8 bg-campus-100 text-campus-600"
            >
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Events</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
