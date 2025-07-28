import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light">
    {children}
  </h2>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-primary animate-fade-in-up">
      <SectionTitle>Internship Experience</SectionTitle>
      <div className="max-w-4xl mx-auto">
        <div className="bg-secondary p-8 rounded-lg border border-gray-700/50 shadow-xl">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold text-accent">Software Trainee</h3>
                    <p className="text-light font-semibold text-lg mt-1">Smart Infocom Pvt Ltd</p>
                </div>
                <span className="text-medium font-medium">Jun 2022 - Dec 2022</span>
            </div>
            <ul className="mt-6 list-disc list-inside text-medium space-y-2">
                <li>Assisted in the development and maintenance of full-stack web applications.</li>
                <li>Collaborated with senior developers to troubleshoot bugs and implement new features.</li>
                <li>Gained practical experience with agile methodologies and version control using Git.</li>
                <li>Contributed to both frontend (React) and backend (Node.js) development tasks.</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;