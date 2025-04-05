
import React from 'react';
import { Trophy } from 'lucide-react';

const Leaderboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-gray-500">See top students ranked by participation</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <Trophy className="h-16 w-16 text-campus-300 mb-4" />
        <h2 className="text-xl font-medium mb-2">Leaderboard Page</h2>
        <p className="text-gray-500 max-w-md">
          This page will contain a comprehensive leaderboard showing top students ranked by
          their event participation and achievement points.
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
