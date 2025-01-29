import React from 'react';
import { BookOpen, Monitor, Beaker, Library } from 'lucide-react';

const facilities = [
  {
    icon: Monitor,
    title: 'Smart Classrooms',
    description: 'Interactive digital boards and modern teaching aids'
  },
  {
    icon: Beaker,
    title: 'Science Lab',
    description: 'Fully equipped lab for hands-on experiments'
  },
  {
    icon: Library,
    title: 'Library',
    description: 'Extensive collection of books and digital resources'
  },
  {
    icon: BookOpen,
    title: 'Study Zones',
    description: 'Quiet spaces for focused learning'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Bright Minds
        </h2>

        {/* Founder's Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000"
              alt="Founder"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2010 by Dr. Sarah Johnson, Bright Minds Academy began with a vision to transform education through personalized learning and innovative teaching methods. Today, we're proud to have helped thousands of students achieve their academic goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2010</span>
                </div>
                <p className="text-gray-700">Academy Founded</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">2015</span>
                </div>
                <p className="text-gray-700">Expanded to Multiple Branches</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">2020</span>
                </div>
                <p className="text-gray-700">Launched Digital Learning Platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <facility.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h4>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;