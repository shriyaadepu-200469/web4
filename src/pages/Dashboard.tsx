
import React from 'react';
import { format } from 'date-fns';
import { Calendar, Layout, Star, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/dashboard/StatsCard';
import ParticipationChart from '@/components/dashboard/ParticipationChart';
import CalendarWidget from '@/components/dashboard/CalendarWidget';
import EventCard from '@/components/dashboard/EventCard';
import LeaderboardPreview from '@/components/dashboard/LeaderboardPreview';

const featuredEvents = [
  {
    id: '1',
    title: 'AI Workshop: Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning with hands-on examples.',
    category: 'Technology' as const,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    date: 'April 6, 2024 • 10:00 AM',
    location: 'Tech Building, Room 105',
    registered: true,
  },
  {
    id: '2',
    title: 'Cultural Festival: Celebrating Diversity',
    description: 'Join us for a day of cultural performances, food, and activities.',
    category: 'Cultural' as const,
    image: 'https://images.unsplash.com/photo-1581092787765-e3189a274c6f?auto=format&fit=crop&w=800&q=80',
    date: 'April 12, 2024 • 12:00 PM',
    location: 'Student Center',
    registered: false,
  },
  {
    id: '3',
    title: 'Career Fair: Tech Industry Spotlight',
    description: 'Connect with leading tech companies and explore job opportunities.',
    category: 'Career' as const,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    date: 'April 15, 2024 • 2:00 PM',
    location: 'Business Building, Main Hall',
    registered: false,
  },
];

const upcomingEvents = [
  {
    id: '4',
    title: 'AI Workshop: Introduction to Machine Learning',
    date: 'Tomorrow • 10:00 AM',
    location: 'Tech Building, Room 105',
  },
  {
    id: '5',
    title: 'Cultural Festival: Celebrating Diversity',
    date: 'April 12 • 12:00 PM',
    location: 'Student Center',
  },
  {
    id: '6',
    title: 'Career Fair: Tech Industry Spotlight',
    date: 'April 15 • 2:00 PM',
    location: 'Business Building, Main Hall',
  },
  {
    id: '7',
    title: 'Hackathon: Innovation Challenge',
    date: 'April 18 • 9:00 AM',
    location: 'Tech Building, Lab 200',
  },
  {
    id: '8',
    title: 'Sports Tournament: Basketball Championship',
    date: 'April 22 • 4:00 PM',
    location: 'Campus Sports Center',
  },
];

const Dashboard = () => {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-gray-500">{currentDate}</p>
        </div>
        <div className="mt-3 sm:mt-0">
          <Button className="bg-campus-600 hover:bg-campus-700">
            View All Events
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Events Attended"
          value="28"
          icon={<Calendar className="h-5 w-5" />}
          trend={{
            value: "12%",
            isPositive: true,
            label: "from last semester",
          }}
        />
        <StatsCard
          title="Upcoming Events"
          value="5"
          icon={<Layout className="h-5 w-5" />}
          trend={{
            value: "AI Workshop",
            isPositive: true,
            label: "tomorrow",
          }}
        />
        <StatsCard
          title="Achievement Points"
          value="1,250"
          icon={<Star className="h-5 w-5" />}
          trend={{
            value: "150",
            isPositive: true,
            label: "this month",
          }}
        />
        <StatsCard
          title="Active Badges"
          value="12"
          icon={<Trophy className="h-5 w-5" />}
          trend={{
            value: "Hackathon Champion",
            isPositive: true,
            label: "latest badge",
          }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ParticipationChart />
        </div>
        <div>
          <CalendarWidget />
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-3">Featured Events</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Upcoming Events</h2>
              <Button variant="ghost" size="sm" className="text-campus-600">
                View All
              </Button>
            </div>
            <div className="divide-y">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="py-3 flex justify-between">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      <span>{event.date}</span>
                      <span className="mx-2">•</span>
                      <Users className="w-3.5 h-3.5 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="text-campus-600 border-campus-200">
                    Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <LeaderboardPreview />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
