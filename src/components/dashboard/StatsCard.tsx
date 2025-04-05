
import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string | number;
    isPositive: boolean;
    label: string;
  };
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  trend,
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden shadow-sm", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h4 className="text-2xl font-bold tracking-tight mt-1">{value}</h4>
            
            {trend && (
              <div className="flex items-center gap-1 mt-2">
                {trend.isPositive ? (
                  <span className="stats-trend-up flex items-center">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    {trend.value}
                  </span>
                ) : (
                  <span className="stats-trend-down flex items-center">
                    <ArrowDownIcon className="w-3 h-3 mr-1" />
                    {trend.value}
                  </span>
                )}
                <span className="text-xs text-gray-500">{trend.label}</span>
              </div>
            )}
          </div>
          
          <div className="p-2 rounded-full bg-campus-100 text-campus-600">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
