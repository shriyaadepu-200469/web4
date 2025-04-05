
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Heart, LayoutDashboard, Settings, Star, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Events',
    href: '/events',
    icon: Calendar,
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Leaderboard',
    href: '/leaderboard',
    icon: Star,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

type EventCategory = {
  id: string;
  name: string;
  count: number;
};

const eventCategories: EventCategory[] = [
  { id: 'academic', name: 'Academic', count: 18 },
  { id: 'cultural', name: 'Cultural', count: 24 },
  { id: 'sports', name: 'Sports', count: 15 },
  { id: 'workshops', name: 'Workshops', count: 21 },
  { id: 'career', name: 'Career', count: 9 },
];

const Sidebar = () => {
  const location = useLocation();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id) 
        : [...prev, id]
    );
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-sidebar text-sidebar-foreground fixed top-0 left-0 bottom-0 z-40 overflow-y-auto">
      <div className="p-4 pt-8 flex flex-col items-center">
        <Avatar className="h-20 w-20 border-2 border-white mb-3">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="James Wilson" />
          <AvatarFallback className="bg-white/20 text-white">JW</AvatarFallback>
        </Avatar>
        <h3 className="font-medium text-lg">James Wilson</h3>
        <p className="text-sm text-white/80">Computer Science, Year 3</p>
        
        <div className="flex gap-4 mt-3">
          <div className="flex flex-col items-center">
            <span className="font-semibold">1,200</span>
            <span className="text-xs text-white/70">points</span>
          </div>
          <Separator orientation="vertical" className="h-8 bg-white/20" />
          <div className="flex flex-col items-center">
            <span className="font-semibold">52</span>
            <span className="text-xs text-white/70">events</span>
          </div>
        </div>
      </div>
      
      <Separator className="bg-white/20 my-4" />
      
      <div className="px-3 py-2">
        <h4 className="text-xs font-semibold text-white/70 uppercase tracking-wider px-3 mb-2">
          Menu
        </h4>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              to={item.href}
              className={cn(
                "nav-link",
                location.pathname === item.href && "active"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <Separator className="bg-white/20 my-4" />
      
      <div className="px-3 py-2 flex-1">
        <h4 className="text-xs font-semibold text-white/70 uppercase tracking-wider px-3 mb-2">
          Event Categories
        </h4>
        <div className="space-y-1">
          {eventCategories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sm text-white/80 hover:bg-white/10",
                selectedCategories.includes(category.id) && "bg-white/15 text-white"
              )}
              onClick={() => toggleCategory(category.id)}
            >
              <span className="flex-1 text-left">{category.name}</span>
              <Badge 
                variant="outline" 
                className="ml-auto text-xs bg-white/10 hover:bg-white/15 border-none"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
      
      <div className="p-4 mt-auto">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-white/80 hover:bg-white/10"
        >
          <Heart className="mr-2 h-4 w-4" />
          Saved Events
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
