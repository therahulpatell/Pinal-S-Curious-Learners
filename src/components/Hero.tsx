import React from 'react';
import { Star, BookOpen, Rocket, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ignite Your Child's
              </span>
              <br />
              Learning Journey
            </h1>
            <p className="text-xl text-gray-600">
              Where curiosity meets excellence, and every student shines bright!
            </p>
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform">
                Get Started
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
              alt="Happy students learning"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-4 animate-bounce">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-full p-4 animate-bounce delay-100">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-1/2 -right-4 bg-purple-500 rounded-full p-4 animate-bounce delay-200">
              <Rocket className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;