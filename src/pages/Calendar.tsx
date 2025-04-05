
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const Calendar = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
          <p className="text-gray-500">View and manage your event schedule</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <CalendarIcon className="h-16 w-16 text-campus-300 mb-4" />
        <h2 className="text-xl font-medium mb-2">Calendar Page</h2>
        <p className="text-gray-500 max-w-md">
          This page will contain a full calendar view of all events you're registered for,
          with options to view by day, week, or month.
        </p>
      </div>
    </div>
  );
};

export default Calendar;
