import React from 'react';
import { BookOpen, Calculator, Microscope } from 'lucide-react';

const gradePrograms = [
  {
    title: 'Grades 1-4',
    color: 'from-blue-400 to-blue-600',
    icon: BookOpen,
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies'],
    activities: ['Interactive Learning', 'Fun Projects', 'Story Time']
  },
  {
    title: 'Grades 5-7',
    color: 'from-purple-400 to-purple-600',
    icon: Calculator,
    subjects: ['Advanced Math', 'Science & Tech', 'Language Arts', 'History'],
    activities: ['Lab Experiments', 'Group Projects', 'Quiz Competitions']
  },
  {
    title: 'Grades 8-10',
    color: 'from-green-400 to-green-600',
    icon: Microscope,
    subjects: ['Algebra', 'Physics', 'Chemistry', 'Biology'],
    activities: ['Research Projects', 'Mock Tests', 'Career Guidance']
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gradePrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <program.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Subjects</h4>
                  <ul className="space-y-2">
                    {program.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Activities</h4>
                  <ul className="space-y-2">
                    {program.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;