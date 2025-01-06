import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  icon: LucideIcon;
  number?: number;
  label: string;
  color: string;
  isHighlight?: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon: Icon, number, label, color, isHighlight }) => {
  return (
    <div className={`flex flex-col items-center p-6 rounded-lg shadow-md ${color} ${isHighlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${isHighlight ? 'bg-white text-yellow-500' : 'bg-gray-100 dark:bg-gray-700'}`}>
        <Icon className="w-8 h-8" />
      </div>
      {number !== undefined && (
        <h3 className="text-3xl font-bold my-3">{number}+</h3>
      )}
      <p className="text-center">{label}</p>
    </div>
  );
};

export default AchievementCard;
