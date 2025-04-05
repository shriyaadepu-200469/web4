
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data
const monthlyData = [
  { name: 'Jan', Events: 4, Points: 120 },
  { name: 'Feb', Events: 3, Points: 90 },
  { name: 'Mar', Events: 5, Points: 150 },
  { name: 'Apr', Events: 7, Points: 210 },
  { name: 'May', Events: 2, Points: 60 },
  { name: 'Jun', Events: 6, Points: 180 },
  { name: 'Jul', Events: 4, Points: 120 },
  { name: 'Aug', Events: 3, Points: 90 },
  { name: 'Sep', Events: 8, Points: 240 },
  { name: 'Oct', Events: 5, Points: 150 },
  { name: 'Nov', Events: 4, Points: 120 },
  { name: 'Dec', Events: 6, Points: 180 },
];

const yearlyData = [
  { name: '2019', Events: 24, Points: 720 },
  { name: '2020', Events: 32, Points: 960 },
  { name: '2021', Events: 40, Points: 1200 },
  { name: '2022', Events: 28, Points: 840 },
  { name: '2023', Events: 35, Points: 1050 },
  { name: '2024', Events: 52, Points: 1560 },
];

const ParticipationChart = () => {
  const [view, setView] = useState<'monthly' | 'yearly'>('monthly');
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Event Participation</CardTitle>
          <Tabs value={view} onValueChange={(v) => setView(v as 'monthly' | 'yearly')}>
            <TabsList className="grid w-40 grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={view === 'monthly' ? monthlyData : yearlyData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="Events" 
                stroke="#8366C1" 
                activeDot={{ r: 8 }} 
              />
              <Line 
                type="monotone" 
                dataKey="Points" 
                stroke="#6D48A4" 
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParticipationChart;
