import React from 'react';
import { SKILLS_DATA } from '../constants';
import SkillBadge from './SkillBadge';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-light">
    {children}
  </h2>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-secondary rounded-xl animate-fade-in-up">
      <SectionTitle>My Tech Stack</SectionTitle>
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-bold text-accent mb-4 text-center md:text-left">{category}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
        <div className="text-center pt-4">
            <p className="text-medium text-lg">...and I've solved over <span className="font-bold text-light">150 DSA problems</span> on LeetCode!</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;