import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Parker',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: "My daughter's grades have improved significantly since joining Bright Minds. The teachers are incredibly supportive and make learning fun!",
    rating: 5
  },
  {
    name: 'Mike Johnson',
    role: 'Student, Grade 10',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    content: 'The interactive learning methods and practice tests helped me score top marks in my finals. Thank you, Bright Minds!',
    rating: 5
  },
  {
    name: 'Emily Chen',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    content: "The personalized attention and regular progress updates have made a huge difference in my son's academic performance.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-bounce">
          Success Stories
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover mb-6"
              />
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <h4 className="text-xl font-bold text-gray-800">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;