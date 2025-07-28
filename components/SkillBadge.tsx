
import React from 'react';
import type { Skill } from '../types';

const SkillBadge: React.FC<Skill> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-3 bg-primary py-3 px-5 rounded-lg border border-gray-700/50 shadow-md hover:shadow-accent/20 hover:border-accent/50 transform hover:-translate-y-1 transition-all duration-300">
      <span className="text-3xl">{icon}</span>
      <span className="font-medium text-light">{name}</span>
    </div>
  );
};

export default SkillBadge;
