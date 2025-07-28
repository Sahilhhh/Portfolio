
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light">
    {children}
  </h2>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center animate-fade-in-up">
      <SectionTitle>Get In Touch</SectionTitle>
      <p className="text-lg text-medium max-w-2xl mx-auto mb-10">
        I'm currently open to new opportunities and collaborations. Feel free to reach out via email, phone, or my social platforms. I'll get back to you as soon as possible!
      </p>

      <div className="max-w-lg mx-auto bg-secondary p-8 rounded-lg shadow-xl border border-gray-700/50">
        <div className="flex flex-col items-start space-y-6">
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center space-x-4 group w-full justify-center sm:justify-start">
            <i className="fas fa-envelope text-2xl text-accent w-8 text-center"></i>
            <span className="text-light text-lg group-hover:text-accent group-hover:underline transition-colors duration-300">{SOCIAL_LINKS.email}</span>
          </a>
          <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center space-x-4 group w-full justify-center sm:justify-start">
            <i className="fas fa-phone text-2xl text-accent w-8 text-center"></i>
            <span className="text-light text-lg group-hover:text-accent group-hover:underline transition-colors duration-300">{SOCIAL_LINKS.phone}</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700/50 flex justify-center space-x-8">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300 text-3xl">
            <i className="fab fa-github"></i>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300 text-3xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
