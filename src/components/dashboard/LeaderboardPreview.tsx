
import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface LeaderboardUser {
  id: string;
  name: string;
  avatarUrl?: string;
  program: string;
  points: number;
  badges: number;
  rank: number;
}

const topUsers: LeaderboardUser[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    program: 'Computer Science',
    points: 1850,
    badges: 15,
    rank: 1,
  },
  {
    id: '2',
    name: 'James Wilson',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    program: 'Computer Science',
    points: 1250,
    badges: 12,
    rank: 2,
  },
  {
    id: '3',
    name: 'Sophia Chen',
    avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    program: 'Business',
    points: 1180,
    badges: 11,
    rank: 3,
  },
  {
    id: '4',
    name: 'Michael Johnson',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    program: 'Engineering',
    points: 1050,
    badges: 9,
    rank: 4,
  },
  {
    id: '5',
    name: 'David Kim',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    program: 'Physics',
    points: 980,
    badges: 8,
    rank: 5,
  },
];

const getRankStyle = (rank: number): string => {
  switch (rank) {
    case 1:
      return 'bg-yellow-500';
    case 2:
      return 'bg-gray-400';
    case 3:
      return 'bg-amber-700';
    default:
      return 'bg-gray-200 text-gray-700';
  }
};

const LeaderboardPreview = () => {
  return (
    <Card className="shadow-sm h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-campus-600" />
          <CardTitle className="text-lg font-semibold">Top Students</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-2">
          {topUsers.map((user) => (
            <div 
              key={user.id} 
              className="flex items-center p-2 rounded-lg hover:bg-gray-50"
            >
              <div className={`w-7 h-7 flex items-center justify-center rounded-full text-white font-medium text-sm mr-3 ${getRankStyle(user.rank)}`}>
                {user.rank}
              </div>
              
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="bg-campus-100 text-campus-600">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.program}</p>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-campus-700">{user.points}</p>
                <p className="text-xs text-gray-500">{user.badges} badges</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to="/leaderboard" className="w-full">
          <div className="text-sm text-campus-600 font-medium flex items-center justify-center hover:underline">
            View Full Leaderboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LeaderboardPreview;
