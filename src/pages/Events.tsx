
import React from 'react';
import { Calendar } from 'lucide-react';

const Events = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Events</h1>
          <p className="text-gray-500">Browse and register for upcoming events</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <Calendar className="h-16 w-16 text-campus-300 mb-4" />
        <h2 className="text-xl font-medium mb-2">Events Page</h2>
        <p className="text-gray-500 max-w-md">
          This page will contain a comprehensive listing of all events, with filtering options
          and detailed information for each event.
        </p>
      </div>
    </div>
  );
};

export default Events;
