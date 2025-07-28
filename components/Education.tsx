import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light">
    {children}
  </h2>
);

const EducationCard: React.FC<{ degree: string; institution: string; details: string }> = ({ degree, institution, details }) => (
    <div className="bg-secondary p-6 rounded-lg border border-gray-700/50 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-bold text-accent">{degree}</h3>
        <p className="text-light font-semibold mt-1">{institution}</p>
        <p className="text-medium mt-2">{details}</p>
    </div>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 animate-fade-in-up">
      <SectionTitle>Education</SectionTitle>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <EducationCard 
            degree="Bachelor of Technology, CSE"
            institution="Chandigarh University"
            details="CGPA: 7.85"
        />
        <EducationCard 
            degree="Senior Secondary (12th Grade)"
            institution="Delhi Public School (DPS)"
            details="Completed with a focus on science and mathematics."
        />
      </div>
    </section>
  );
};

export default Education;