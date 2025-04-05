
import React from 'react';
import { format } from 'date-fns';
import { BarChart, Calendar, ChevronRight, PlusCircle, Settings, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatsCard from '@/components/dashboard/StatsCard';

const upcomingEvents = [
  {
    id: '1',
    title: 'AI Workshop: Introduction to Machine Learning',
    date: 'Tomorrow • 10:00 AM',
    location: 'Tech Building, Room 105',
    registrations: 45,
  },
  {
    id: '2',
    title: 'Cultural Festival: Celebrating Diversity',
    date: 'April 12 • 12:00 PM',
    location: 'Student Center',
    registrations: 120,
  },
  {
    id: '3',
    title: 'Career Fair: Tech Industry Spotlight',
    date: 'April 15 • 2:00 PM',
    location: 'Business Building, Main Hall',
    registrations: 78,
  },
];

const pastEvents = [
  {
    id: '4',
    title: 'Blockchain Workshop',
    date: 'March 25 • 2:00 PM',
    location: 'Tech Building, Room 201',
    attendees: 36,
    registrations: 50,
  },
  {
    id: '5',
    title: 'Design Thinking Masterclass',
    date: 'March 18 • 3:30 PM',
    location: 'Arts Center',
    attendees: 42,
    registrations: 45,
  },
  {
    id: '6',
    title: 'Startup Pitch Competition',
    date: 'March 10 • 5:00 PM',
    location: 'Business Building Auditorium',
    attendees: 85,
    registrations: 100,
  },
];

const OrganizerDashboard = () => {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Organizer Dashboard</h1>
          <p className="text-gray-500">{currentDate}</p>
        </div>
        <div className="mt-3 sm:mt-0 flex gap-3">
          <Button variant="outline" className="border-campus-200 text-campus-600">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button className="bg-campus-600 hover:bg-campus-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Events"
          value="42"
          icon={<Calendar className="h-5 w-5" />}
          trend={{
            value: "8",
            isPositive: true,
            label: "this month",
          }}
        />
        <StatsCard
          title="Total Registrations"
          value="1,856"
          icon={<Users className="h-5 w-5" />}
          trend={{
            value: "12%",
            isPositive: true,
            label: "from last month",
          }}
        />
        <StatsCard
          title="Avg. Attendance Rate"
          value="78%"
          icon={<BarChart className="h-5 w-5" />}
          trend={{
            value: "3%",
            isPositive: true,
            label: "improvement",
          }}
        />
        <StatsCard
          title="Upcoming Events"
          value="8"
          icon={<Calendar className="h-5 w-5" />}
          trend={{
            value: "AI Workshop",
            isPositive: true,
            label: "tomorrow",
          }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-4">
              <Card>
                <CardHeader className="pb-1">
                  <CardTitle>Manage Upcoming Events</CardTitle>
                  <CardDescription>
                    You have {upcomingEvents.length} upcoming events. Click on an event to manage details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="divide-y">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="py-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="w-3.5 h-3.5 mr-1" />
                            <span>{event.date}</span>
                            <span className="mx-2">•</span>
                            <Users className="w-3.5 h-3.5 mr-1" />
                            <span>{event.registrations} registrations</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          Manage
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">View All Upcoming Events</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="past" className="mt-4">
              <Card>
                <CardHeader className="pb-1">
                  <CardTitle>Past Events Analytics</CardTitle>
                  <CardDescription>
                    Review performance metrics for your past events.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="divide-y">
                    {pastEvents.map((event) => (
                      <div key={event.id} className="py-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="w-3.5 h-3.5 mr-1" />
                            <span>{event.date}</span>
                            <span className="mx-2">•</span>
                            <Users className="w-3.5 h-3.5 mr-1" />
                            <span>{event.attendees}/{event.registrations} attended</span>
                          </div>
                        </div>
                        <div>
                          <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-gray-100">
                            {Math.round((event.attendees / event.registrations) * 100)}% attendance
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">View All Past Events</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Event
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Registrations
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips for Organizers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-campus-600 font-bold">•</span>
                  <span>Send reminder emails 24 hours before events</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-campus-600 font-bold">•</span>
                  <span>Collect feedback after each event</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-campus-600 font-bold">•</span>
                  <span>Update event descriptions with detailed agendas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-campus-600 font-bold">•</span>
                  <span>Include event materials in follow-up communications</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
