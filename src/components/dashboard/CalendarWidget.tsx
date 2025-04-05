
import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

const eventDates = [
  new Date(2024, 3, 8),
  new Date(2024, 3, 12),
  new Date(2024, 3, 15),
  new Date(2024, 3, 18),
  new Date(2024, 3, 22),
  new Date(2024, 3, 28),
];

const CalendarWidget = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const isDayWithEvent = (day: Date) => {
    return eventDates.some(eventDate => 
      eventDate.getDate() === day.getDate() && 
      eventDate.getMonth() === day.getMonth() && 
      eventDate.getFullYear() === day.getFullYear()
    );
  };

  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-campus-600" />
          <CardTitle className="text-lg font-semibold">Calendar</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-auto"
          modifiers={{
            event: isDayWithEvent,
          }}
          modifiersStyles={{
            event: { 
              fontWeight: 'bold',
              backgroundColor: 'rgba(131, 102, 193, 0.15)',
              color: '#6D48A4',
              borderRadius: '0',
            }
          }}
        />
        {date && isDayWithEvent(date) && (
          <div className="mt-4 p-3 bg-campus-50 rounded-md border border-campus-100">
            <h4 className="font-medium text-campus-800">
              Events on {format(date, 'MMMM dd, yyyy')}
            </h4>
            <ul className="mt-2 space-y-1">
              <li className="text-sm flex justify-between">
                <span>AI Workshop</span>
                <span className="text-gray-500">10:00 AM</span>
              </li>
              {date.getDate() === 12 && (
                <li className="text-sm flex justify-between">
                  <span>Career Fair</span>
                  <span className="text-gray-500">2:00 PM</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
