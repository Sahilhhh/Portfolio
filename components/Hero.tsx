import React from 'react';
import { PROFILE_IMAGE_BASE64 } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between min-h-screen py-20 text-center md:text-left">
      <div className="md:w-3/5 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-black text-light leading-tight">
          Hi, I'm <span className="text-accent">Sahil Gupta</span>
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-medium mt-2">
          A Passionate Full-Stack Developer
        </p>
        <p className="mt-6 text-lg text-medium max-w-xl mx-auto md:mx-0">
          I build robust, scalable, and user-friendly web applications from front to back. Let's create something amazing together.
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-accent/40"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-secondary text-light font-bold rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-40"></div>
            <img
              src={PROFILE_IMAGE_BASE64}
              alt="Sahil Gupta"
              className="relative w-full h-full object-cover rounded-full border-4 border-secondary shadow-2xl"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;