import React, { useEffect, useRef } from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const results = [
  { label: 'Average Score', value: 95 },
  { label: 'Student Satisfaction', value: 98 },
  { label: 'University Placements', value: 92 }
];

const achievements = [
  {
    icon: Trophy,
    title: 'Best Tuition Center 2023',
    description: 'Awarded by Education Excellence Board'
  },
  {
    icon: Star,
    title: '1000+ Success Stories',
    description: 'Students achieving top grades'
  },
  {
    icon: Award,
    title: 'Quality Education Award',
    description: 'Recognition for teaching excellence'
  }
];

const Results = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLDivElement;
            const value = progressBar.dataset.value;
            progressBar.style.width = `${value}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Results & Achievements
        </h2>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{result.label}</h3>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  ref={(el) => (progressRefs.current[index] = el)}
                  data-value={result.value}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-0 transition-all duration-1000"
                ></div>
              </div>
              <div className="text-right mt-2 font-bold text-blue-600">
                {result.value}%
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <achievement.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;