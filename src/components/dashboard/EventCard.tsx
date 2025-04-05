
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type EventCategory = 'Technology' | 'Cultural' | 'Academic' | 'Sports' | 'Career' | 'Workshop';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  image: string;
  date: string;
  location: string;
  registered?: boolean;
  className?: string;
}

const getCategoryColor = (category: EventCategory) => {
  const colors = {
    Technology: 'bg-blue-100 text-blue-800',
    Cultural: 'bg-purple-100 text-purple-800',
    Academic: 'bg-yellow-100 text-yellow-800',
    Sports: 'bg-green-100 text-green-800',
    Career: 'bg-red-100 text-red-800',
    Workshop: 'bg-indigo-100 text-indigo-800',
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  category,
  image,
  date,
  location,
  registered,
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <div className="relative h-40">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <Badge className={cn("absolute top-2 left-2", getCategoryColor(category))}>
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0">
        <Button 
          className={cn(
            registered ? "bg-green-600 hover:bg-green-700" : "bg-campus-600 hover:bg-campus-700",
            "w-full"
          )}
          size="sm"
        >
          {registered ? 'Registered' : 'Register Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
